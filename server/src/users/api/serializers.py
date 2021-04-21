from rest_framework import serializers

from users.models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    slug = serializers.SerializerMethodField('get_user_account_slug')
    class Meta:
        model = UserProfile
        fields = ['slug',
                'focus_health',
                'focus_wellness',
                'focus_health_wellness',
                'focus_holistic',
                'focus_life',
                'focus_behavioral',
                'focus_unsure']

    def get_user_account_slug(self, user):
        return user.user.slug