from math import sin, cos, sqrt, atan2, radians, floor
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
    coach = models.OneToOneField(Account, on_delete=models.CASCADE, related_name="coach_profile")
    image = models.ImageField(upload_to=upload_location, blank=True, null=True)
    gender = models.CharField(max_length=25)
    lat = models.FloatField(default=0.0)
    lon = models.FloatField(default=0.0)
    experienceDescription = models.TextField(default='')
    credentialDescription = models.TextField(default='')
    sessionDescription = models.TextField(default='')
    trainingAddress = models.CharField(default='', max_length=200)
    trainingPhone = models.CharField(default='', max_length=50)
    sessionLength = models.CharField(default='', max_length=50)
    minPrice = models.IntegerField(default=0)
    maxPrice = models.IntegerField(default=50)
    focus_life = models.BooleanField(default=False)
    focus_behavioral = models.BooleanField(default=False)
    focus_health_wellness = models.BooleanField(default=False)
    focus_holistic = models.BooleanField(default=False)
    focus_nutrition_fitness = models.BooleanField(default=False)
    focus_business = models.BooleanField(default=False)
    travel = models.BooleanField(default=False)
    description = models.TextField(default="")
    approved = models.BooleanField(default=False)
    

    def distanceFromLatLong(self, lat, long):
        # approximate radius of earth in km
        R = 6373.0
        lat1 = radians(lat)
        long1 = radians(long)
        lat2 = radians(self.lat)
        long2 = radians(self.lon)

        dlon = long2 - long1
        dlat = lat2 - lat1

        a = sin(dlat / 2)**2 + cos(lat2) * cos(lat2) * sin(dlon / 2)**2
        c = 2 * atan2(sqrt(a), sqrt(1 - a))

        # miles = km * 0.62137
        distance = (R*c)*0.62137
        return distance
    
    def no_of_reviews(self):
        reviews = Review.objects.filter(coach=self, approval=True)
        return len(reviews)

    def avg_rating(self):
        ar = 0
        # ratings array index = # of reviews for that rating (e.g if index 1 has a value of a 5, then the coach has 5 one-star reviews)
        ratings = [0, 0, 0, 0, 0, 0]
        reviews = Review.objects.filter(coach=self, approval=True)
        for review in reviews:
            val = floor(review.rating)
            ratings[val] += ratings[val] + 1

        # final rating calculate is  1*a+2*b+3*c+4*d+5*e/5 where 
        # a= # of 1 star ratings 
        # b= # of 2 star ratings 
        # c= # of 3 star ratings 
        # d= # of 4 star ratings  
        # e= # of 5 star rating.
        for i, v in enumerate(ratings):
            ar += i*v
        return ar / 5
    
    
    def __str__(self):
        return self.coach.last_name + ', ' + self.coach.first_name
    

# @receiver(pre_save, sender=Coach)
# def pre_save_coach_receiver(sender, instance, *args, **kwargs):
#     # TODO: RANDOM.RANDINT IS A PLACEHOLDER, REPLACE WITH COACH'S ID VALUE LATER
#     instance.slug = slugify(instance.coach.username + '-' + str(random.randint(0, 100000000)))

# pre_save.connect(pre_save_coach_receiver, sender=Coach)

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