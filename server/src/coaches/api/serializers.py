from rest_framework import serializers
from coaches.models import Coach

class CoachSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField('get_coach_account_firstname')
    last_name = serializers.SerializerMethodField('get_coach_account_lastname')
    username = serializers.SerializerMethodField('get_coach_account_username')
    email = serializers.SerializerMethodField('get_coach_account_email')
    slug = serializers.SerializerMethodField('get_coach_account_slug')
    class Meta:
        model = Coach
        fields = ['first_name',
                'last_name',
                'username',
                'email',
                'slug',
                'gender',
                'experienceDescription',
                'credentialDescription',
                'sessionDescription',
                'trainingAddress',
                'trainingPhone',
                'description',
                'sessionLength',
                'minPrice',
                'maxPrice',
                'no_of_reviews',
                'avg_rating',
                'focus_life',
                'focus_behavioral',
                'focus_health_wellness',
                'focus_holistic',
                'focus_business',
                'travel',
                'description',
                'image']

    def save(self, account, lat, lon, focus):
        # Find which focuses that user specified and set them to be true
        is_focus_life = False
        is_focus_behavioral = False
        is_focus_health_wellness = False
        is_focus_holistic = False
        is_focus_nutrition_fitness = False
        is_focus_business = False

        if focus == "life-coaching":
            is_focus_life = True
        if focus == "nutrition-fitness":
            is_focus_nutrition_fitness = True
        if focus == "health-and-wellness-coaching":
            is_focus_health_wellness = True
        if focus == "holistic-Health-wellness-coaching":
            is_focus_holistic = True
        if focus == "spiritual-wellness-coaching":
            is_focus_behavioral = True

        coach_profile = Coach(
            coach = account,
            gender = self.validated_data['gender'],
            lat = lat,
            lon = lon,
            experienceDescription = self.validated_data['experienceDescription'],
            credentialDescription = self.validated_data['credentialDescription'],
            sessionDescription = self.validated_data['sessionDescription'],
            trainingAddress=self.validated_data['trainingAddress'],
            trainingPhone=self.validated_data['trainingPhone'],
            description=self.validated_data['description'],
            sessionLength=self.validated_data['sessionLength'],
            minPrice=self.validated_data['minPrice'],
            maxPrice=self.validated_data['maxPrice'],
            focus_life = is_focus_life,
            focus_behavioral = is_focus_behavioral,
            focus_health_wellness = is_focus_health_wellness,
            focus_holistic = is_focus_holistic,
            focus_nutrition_fitness = is_focus_nutrition_fitness,
            focus_business = False,
            approved = True,
        )
        coach_profile.save()

        return coach_profile


    def get_coach_account_firstname(self, coach):
        return coach.coach.first_name

    def get_coach_account_lastname(self, coach):
        return coach.coach.last_name

    def get_coach_account_username(self, coach):
        return coach.coach.username

    def get_coach_account_email(self, coach):
        return coach.coach.email

    def get_coach_account_slug(self, coach):
        return coach.coach.slug

# Modified version of CoachSerializer class; does not include description field in response data
class CoachListSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField('get_coach_account_firstname')
    last_name = serializers.SerializerMethodField('get_coach_account_lastname')
    username = serializers.SerializerMethodField('get_coach_account_username')
    email = serializers.SerializerMethodField('get_coach_account_email')
    slug = serializers.SerializerMethodField('get_coach_account_slug')

    class Meta:
        model = Coach
        fields = ['first_name',
                'last_name',
                'username',
                'email',
                'slug',
                'no_of_reviews',
                'avg_rating',
                'focus_life',
                'focus_behavioral',
                'focus_health_wellness',
                'focus_holistic',
                'focus_business',
                'description',
                'travel',]

    def get_coach_account_firstname(self, coach):
        return coach.coach.first_name

    def get_coach_account_lastname(self, coach):
        return coach.coach.last_name

    def get_coach_account_username(self, coach):
        return coach.coach.username

    def get_coach_account_email(self, coach):
        return coach.coach.email

    def get_coach_account_slug(self, coach):
        return coach.coach.slug

'''
class CoachSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = ['first_name', 'last_name',
                'slug',
                'username',
                'gender',
                'focus_health',
                'focus_wellness',
                'focus_health_wellness',
                'focus_holistic',
                'focus_life',
                'focus_behavioral',
                'travel',
                'description',]

    def save(self):
        coach_profile = Coach(
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data['last_name'],
            user_name = self.validated_data['username'],
            gender = self.validated_data['gender'],
            focus_health = self.validated_data['focus_health'],
            focus_wellness = self.validated_data['focus_wellness'],
            focus_health_wellness = self.validated_data['focus_health_wellness'],
            focus_holistic = self.validated_data['focus_holistic'],
            focus_life = self.validated_data['focus_life'],
            focus_behavioral = self.validated_data['focus_behavioral'],
            travel = self.validated_data['travel'],
            description = self.validated_data['description'],
        )
        coach_profile.save()

        return coach_profile
'''