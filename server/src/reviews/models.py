from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.db.models.signals import pre_save
from django.conf import settings
from django.dispatch import receiver
from django.core.validators import MaxValueValidator, MinValueValidator
# from location_field.models.plain import PlainLocationField
import random
from accounts.models import Account
from coaches.models import Coach


class Review(models.Model):
    coach = models.ForeignKey(Coach, on_delete=models.CASCADE)
    reviewer = models.ForeignKey(Account, on_delete=models.CASCADE)
    rating = models.IntegerField(validators=[MinValueValidator(0),MaxValueValidator(5)])
    body = models.TextField(max_length=3000, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    
    #prevents user from rating the same coach multiple times
    class Meta:
        unique_together = (('reviewer', 'coach'),)
        index_together = (('reviewer', 'coach'),)