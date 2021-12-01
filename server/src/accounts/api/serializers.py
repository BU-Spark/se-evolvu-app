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
        fields = [
            'first_name', 
            'last_name', 
            'email', 
            'username', 
            'password', 
            'password2',
            'dob',
            'street',
            'city', 
            'state',
            'country',
            'zip_code',
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
            dob=self.validated_data['dob'],
            street=self.validated_data['street'],
            city=self.validated_data['city'], 
            state=self.validated_data['state'],
            country=self.validated_data['country'],
            zip_code=self.validated_data['zip_code'],
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

