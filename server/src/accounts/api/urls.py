from django.urls import path

from accounts.api.views import (
    registration_view,
    CustomObtainAuthToken,
    # login_view,
)

from rest_framework.authtoken.views import obtain_auth_token

app_name = 'accounts'

urlpatterns = [
    path('register', registration_view, name="register"),
    path('login', CustomObtainAuthToken.as_view(), name="login"),
    #path('login', login_view, name="login"),
]