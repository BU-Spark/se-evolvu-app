import os
import requests
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from django.conf import settings
from django.db.models.signals import post_save, pre_save
from django.utils.text import slugify
from django.dispatch import receiver
import random
from rest_framework.authtoken.models import Token

class AccountManager(BaseUserManager):
    def create_user(self, email, username, first_name, last_name, lat, lon, password=None):
        if not email:
            raise ValueError("Users must enter a valid email address")
        if not username:
            raise ValueError("Users must have a valid username")
        if not first_name:
            raise ValueError("Users must enter a first name")
        if not last_name:
            raise ValueError("Users must enter a last name")
        if not lat: 
            raise ValueError("Users must have a valid latitude")
        if not lon:
            raise ValueError("Users must enter a valid longitude")

        user = self.model(
            email = self.normalize_email(email),
            username = username,
            first_name = first_name,
            last_name = last_name,
            lat = lat,
            lon = lon,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, first_name, last_name, password, lat, lon):
        user = self.create_user(
            email = self.normalize_email(email),
            username = username,
            first_name = first_name,
            last_name = last_name,
            password=password,
            lat = lat,
            lon = lon,

        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class Account(AbstractBaseUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(verbose_name='email', max_length=60, unique=True)
    username = models.CharField(max_length=30, unique=True)
    slug = models.SlugField(blank=True, unique=True)
    lat = models.FloatField()
    lon = models.FloatField()
    is_customer = models.BooleanField(default=False)
    is_coach = models.BooleanField(default=False)
    date_joined = models.DateTimeField(verbose_name='Date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='Last login', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    objects = AccountManager()

    def __str__(self):
        return self.last_name + ', ' + self.first_name
        #self.email
        #self.last_name, self.first_name

    def get_info(self):
        user = {
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "username": self.username,
            "lat": self.lat,
            "lon": self.lon,
            "is_customer": self.is_customer,
            "is_coach": self.is_coach,
            "date_joined": self.date_joined,
            "last_login": self.last_login,
            "is_admin": self.is_admin,
            "is_active": self.is_admin,
            "is_staff": self.is_staff,
            "is_superuser": self.is_superuser,
        }
        return user

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    def convertZipToLatLon(zip):
        # Turn zipCode into a lat and long 
        API_KEY = os.environ['MAPQUEST_API_KEY']
        response = requests.get(f"http://open.mapquestapi.com/geocoding/v1/address?key={API_KEY}&location={zip}")
        json = response.json()
        latLng = json["results"][0]["locations"][0]
        lat = latLng["latLng"]["lat"]
        lon = latLng["latLng"]["lng"]
        return [lat, lon]


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
        #instance.slug = slugify(instance.username + '-' + str(random.randint(0, 100000000)))


def pre_save_account_receiver(sender, instance, *args, **kwargs):
    # TODO: RANDOM.RANDINT IS A PLACEHOLDER, REPLACE WITH UNIQUE ID VALUE LATER
    instance.slug = slugify(instance.username + '-' + str(random.randint(0, 100000000)))

pre_save.connect(pre_save_account_receiver, sender=Account)
