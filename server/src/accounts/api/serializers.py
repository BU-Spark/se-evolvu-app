from rest_framework import serializers
from utils import convertZipToLatLon
from accounts.models import Account
from users.models import UserProfile
from coaches.models import Coach
from users.api.serializers import UserProfileSerializer
from coaches.api.serializers import CoachSerializer

class RegistrationSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = Account
        fields = [
            'first_name', 
            'last_name', 
            'email', 
            'username', 
            'password', 
            'password2', 
            'is_customer', 
            'is_coach', 
            'is_active']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        account = Account(
            email = self.validated_data['email'],
            username = self.validated_data['username'],
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data['last_name'],
            is_customer = self.validated_data['is_customer'],
            is_coach = self.validated_data['is_coach'],
            is_active = self.validated_data['is_active'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match'})

        account.set_password(password)
        account.save()
        profile = UserProfile(
        user = account,
        gender = "N",
        )
        profile.save()

        return account


# class CoachRegistrationSerializer(serializers.ModelSerializer):
#     password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
#     class Meta:
#         model = Account
#         fields = [
#             'first_name', 
#             'last_name', 
#             'email', 
#             'username', 
#             'password', 
#             'password2', 
#             'dateOfBirth', 
#             'focus', 
#             'gender', 
#             'phone', 
#             'street', 
#             'city', 
#             'state', 
#             'zip', 
#             'country', 
#             'experienceDescription', 
#             'credentialDescription', 
#             'sessionDescription', 
#             'bio'
#             'trainingAddress', 
#             'trainingPhone', 
#             'sessionLength', 
#             'sessionRate', 
#         ]
#         extra_kwargs = {
#             'password': {'write_only': True}
#         }

#     def save(self):
#         password = self.validated_data['password']
#         password2 = self.validated_data['password2']

#         if password != password2:
#             raise serializers.ValidationError({'password': 'Passwords must match'})
        
#         # Get Latitude and Longitude based on zipcode 
#         [lat, lon] = convertZipToLatLon(self.validated_data['zip'])

#         #Parse out the session rates which come in form of minPrice-maxPrice (e.g 25-250)
#         priceString = self.validated_data['price']
#         [minPriceStr, maxPriceStr] = priceString.split("-")
#         minPrice = int(minPriceStr)
#         maxPrice = int(maxPriceStr)

#         account = Account(
#             email = self.validated_data['email'],
#             username = self.validated_data['username'],
#             first_name = self.validated_data['first_name'],
#             last_name = self.validated_data['last_name'],
#             lat = lat,
#             lon = lon,
#             dob=self.validated_data['dateOfBirth'],
#             street=self.validated_data['street'],
#             city=self.validated_data['city'],
#             state=self.validated_data['state'],
#             country=self.validated_data['country'],
#             zip_code=self.validated_data['zip'],
#             is_customer = False,
#             is_coach = True,
#             is_active = True,
#         )

#         account.set_password(password)
#         account.save()

#         # Find which focuses that user specified and set them to be true
#         is_focus_life = False
#         is_focus_behavioral = False
#         is_focus_health_wellness = False
#         is_focus_holistic = False
#         is_focus_nutrition_fitness = False
#         is_focus_business = False

#         focus = self.validated_data['focus']

#         if focus == "life-coaching":
#             is_focus_life = True
#         if focus == "nutrition-fitness":
#             is_focus_nutrition_fitness = True
#         if focus == "health-and-wellness-coaching":
#             is_focus_health_wellness = True
#         if focus == "holistic-Health-wellness-coaching":
#             is_focus_holistic = True
#         if focus == "spiritual-wellness-coaching":
#             is_focus_behavioral = True

#         coach_profile = Coach(
#             coach = account,
#             gender = self.validated_data['gender'],
#             experienceDescription = self.validated_data['experienceDescription'],
#             credentialDescription = self.validated_data['credentialDescription'],
#             sessionDescription = self.validated_data['sessionDescription'],
#             trainingAddress=self.validated_data['trainingAddress'],
#             trainingPhone=self.validated_data['trainingPhone'],
#             description=self.validated_data['bio'],
#             sessionLength=self.validated_data['sessionLength'],
#             minPrice=minPrice,
#             maxPrice=maxPrice,
#             focus_life = is_focus_life,
#             focus_behavioral = is_focus_behavioral,
#             focus_health_wellness = is_focus_health_wellness,
#             focus_holistic = is_focus_holistic,
#             focus_nutrition_fitness = is_focus_nutrition_fitness,
#             focus_business = False,
#             approved = True,
#         )
#         coach_profile.save()

#         return account
