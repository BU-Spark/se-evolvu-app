from rest_framework import serializers

from coaches.models import Coach

class CoachSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField('get_coach_account_firstname')
    last_name = serializers.SerializerMethodField('get_coach_account_lastname')
    username = serializers.SerializerMethodField('get_coach_account_username')
    email = serializers.SerializerMethodField('get_coach_account_email')

    class Meta:
        model = Coach
        fields = ['first_name',
                'last_name',
                'username',
                'email',
                'no_of_reviews',
                'slug',
                'focus_life',
                'focus_behavioral',
                'focus_health_wellness',
                'focus_holistic',
                'focus_business',
                'travel',
                'description',]

    def get_coach_account_firstname(self, coach):
        return coach.coach.first_name

    def get_coach_account_lastname(self, coach):
        return coach.coach.last_name

    def get_coach_account_username(self, coach):
        return coach.coach.username

    def get_coach_account_email(self, coach):
        return coach.coach.email

# Modified version of CoachSerializer class; does not include description field in response data
class CoachListSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField('get_coach_account_firstname')
    last_name = serializers.SerializerMethodField('get_coach_account_lastname')
    username = serializers.SerializerMethodField('get_coach_account_username')
    email = serializers.SerializerMethodField('get_coach_account_email')

    class Meta:
        model = Coach
        fields = ['first_name',
                'last_name',
                'username',
                'email',
                'no_of_reviews',
                'slug',
                'focus_life',
                'focus_behavioral',
                'focus_health_wellness',
                'focus_holistic',
                'focus_business',
                'travel',]

    def get_coach_account_firstname(self, coach):
        return coach.coach.first_name

    def get_coach_account_lastname(self, coach):
        return coach.coach.last_name

    def get_coach_account_username(self, coach):
        return coach.coach.username

    def get_coach_account_email(self, coach):
        return coach.coach.email

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