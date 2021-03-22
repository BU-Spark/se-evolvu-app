from rest_framework import serializers

from coaches.models import Coach

class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = ['slug',
                'focus_health',
                'focus_wellness',
                'focus_health_wellness',
                'focus_holistic',
                'focus_life',
                'focus_behavioral',
                'travel',
                'description',]

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

'''
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