from django.urls import path

from reviews.api.views import (
    ReviewView,
    create_coach_review
)

from rest_framework import routers
from django.conf.urls import include

from rest_framework.authtoken.views import obtain_auth_token

from reviews.api.views import (
    ReviewList,
    approve_coach_review
)
app_name = 'reviews'

router = routers.DefaultRouter()
router.register('', ReviewView)

urlpatterns = [
    path('', include(router.urls)),
    path('list', ReviewList.as_view(), name='list'),
    path('approve', approve_coach_review, name='approve'),
    path('create/<slug>', create_coach_review, name='create'),
]