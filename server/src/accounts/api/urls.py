from django.urls import path

from accounts.api.views import (
    registration_view,
    CustomObtainAuthToken,
    coach_registration_view
)

from rest_framework.authtoken.views import obtain_auth_token

app_name = 'accounts'

urlpatterns = [
    path('register', registration_view, name="register"),
    path('login', CustomObtainAuthToken.as_view(), name="login"),
    path('register_coach', coach_registration_view, name="register_coach")
]