from django.db import models
from django.utils.text import slugify
from django.db.models.signals import pre_save
from django.conf import settings
from django.dispatch import receiver
import random
from accounts.models import Account

# Create your models here.
def upload_location(instance, filename, **kwargs):
    file_path = 'users/{user_id}/{filename}'.format(
        user_id=str(instance.user.id), filename=filename
    )
    return file_path

class UserProfile(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE, related_name="user_profile")
    image = models.ImageField(upload_to=upload_location, blank=True, null=True)
    gender = models.CharField(max_length=1)
    focus_health = models.BooleanField(default=False)
    focus_wellness = models.BooleanField(default=False)
    focus_health_wellness = models.BooleanField(default=False)
    focus_holistic = models.BooleanField(default=False)
    focus_life = models.BooleanField(default=False)
    focus_behavioral = models.BooleanField(default=False)
    focus_unsure = models.BooleanField(default=False)
    # city = models.CharField(max_length=255)
    # location = PlainLocationField(based_fields=['city'], zoom=7)
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # slug = user.slug

    # Applies all focuses if user selects unsure for focus
    def unsure_force_enable(self):
        if self.focus_unsure == True:
            self.focus_health = True
            self.focus_wellness = True
            self.focus_health_wellness = True
            self.focus_holistic = True
            self.focus_life = True
            self.focus_behavioral = True

    def __str__(self):
        return self.user.last_name + ', ' + self.user.first_name

    

# def pre_save_user_receiver(sender, instance, *args, **kwargs):
#     # TODO: RANDOM.RANDINT IS A PLACEHOLDER, REPLACE WITH UNIQUE ID VALUE LATER
#     instance.slug = slugify(instance.user.username + '-' + str(random.randint(0, 100000000)))

# pre_save.connect(pre_save_user_receiver, sender=UserProfile)