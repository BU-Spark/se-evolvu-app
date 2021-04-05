from django.urls import path

from reviews.api.views import (
    ReviewView,
)

from rest_framework import routers
from django.conf.urls import include

from rest_framework.authtoken.views import obtain_auth_token

app_name = 'reviews'

router = routers.DefaultRouter()
router.register('', ReviewView)

urlpatterns = [
    path('', include(router.urls)),
]