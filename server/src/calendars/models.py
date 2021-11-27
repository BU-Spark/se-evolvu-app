from django.db import models
from accounts.models import Account


class Calendar(models.Model):
    coach = models.OneToOneField(Account, on_delete=models.CASCADE, related_name="coach_profile", unique=True)
    monday = models.TextField(default='')
    tuesday = models.TextField(default='')
    wednesday = models.TextField(default='')
    thursday = models.TextField(default='')
    friday = models.TextField(default='')
    saturday = models.TextField(default='')
    sunday = models.TextField(default='')


    