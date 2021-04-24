from rest_framework import serializers

from users.models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField('get_user_account_firstname')
    last_name = serializers.SerializerMethodField('get_user_account_lastname')
    email = serializers.SerializerMethodField('get_user_account_email')
    slug = serializers.SerializerMethodField('get_user_account_slug')
    class Meta:
        model = UserProfile
        fields = ['first_name',
                'last_name',
                'email',
                'gender',
                'slug',
                'focus_health',
                'focus_wellness',
                'focus_health_wellness',
                'focus_holistic',
                'focus_life',
                'focus_behavioral',
                'focus_unsure']

    def get_user_account_firstname(self, user):
        return user.user.first_name

    def get_user_account_lastname(self, user):
        return user.user.last_name

    def get_user_account_email(self, user):
        return user.user.email

    def get_user_account_slug(self, user):
        return user.user.slug