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
from reviews.models import Review
#import reviews.models.Review

def upload_location(instance, filename, **kwargs):
    file_path = 'coaches/{coach_id}/{filename}'.format(
        coach_id=str(instance.coach.id), filename=filename
    )
    return file_path

class Coach(models.Model):
    coach = models.ForeignKey(Account, on_delete=models.CASCADE) #, related_name="coach_profile")
    #name = models.ForeignKey('accounts.Account.first_name', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=upload_location, blank=True, null=True)
    gender = models.CharField(max_length=1)
    focus_life = models.BooleanField(default=False)
    focus_behavioral = models.BooleanField(default=False)
    focus_health_wellness = models.BooleanField(default=False)
    focus_holistic = models.BooleanField(default=False)
    focus_nutrition_fitness = models.BooleanField(default=False)
    focus_business = models.BooleanField(default=False)
    travel = models.BooleanField(default=False)
    description = models.TextField()
    # city = models.CharField(max_length=255)
    # location = PlainLocationField(based_fields=['city'], zoom=7)
    slug = models.SlugField(blank=True, unique=True)

    """
    def no_of_reviews(self):
        reviews = Review.objects.filter(coach=self)
        return len(reviews)
    """
    
    def __str__(self):
        return self.coach.last_name + ', ' + self.coach.first_name
    

# @receiver(pre_save, sender=Coach)
def pre_save_coach_receiver(sender, instance, *args, **kwargs):
    # TODO: RANDOM.RANDINT IS A PLACEHOLDER, REPLACE WITH COACH'S ID VALUE LATER
    instance.slug = slugify(instance.coach.username + '-' + str(random.randint(0, 100000000)))

pre_save.connect(pre_save_coach_receiver, sender=Coach)

"""
class Review(models.Model):
    coach = models.ForeignKey(Coach, on_delete=models.CASCADE)
    reviewer = models.ForeignKey(Account, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    body = models.TextField(max_length=3000, blank=True)
    rating = models.IntegerField(validators=[MinValueValidator(0),MaxValueValidator(5)])
    
    #prevents user from rating the same coach multiple times
    class Meta:
        unique_together = (('reviewer', 'coach'),)
        index_together = (('reviewer', 'coach'),)
"""