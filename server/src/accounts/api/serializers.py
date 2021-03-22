from rest_framework import serializers

from accounts.models import Account
from users.models import UserProfile
from coaches.models import Coach
from users.api.serializers import UserProfileSerializer
from coaches.api.serializers import CoachSerializer

class RegistrationSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = Account
        fields = ['first_name', 'last_name', 'email', 'username', 'password', 'password2', 'is_customer', 'is_coach',]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        account = Account(
            email = self.validated_data['email'],
            username = self.validated_data['username'],
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data['last_name'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        is_customer = self.validated_data['is_customer']
        is_coach = self.validated_data['is_coach']

        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match'})

        coach_profile = Coach(
            coach = account,
            gender = "N",
            description = "",
        )
        # coach_profile.save()

        profile = UserProfile(
            user = account,
            gender = "N",
        )
        # profile.save()

        account.set_password(password)
        account.save()
        coach_profile.save()
        profile.save()

        if is_coach == False:
            coach_profile.delete()
        if is_customer == False:
            profile.delete()

        return account