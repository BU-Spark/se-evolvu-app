"""evolvu URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

import coaches
from coaches.api import urls, views, serializers

import accounts
from accounts.api import urls, views, serializers

import users
from users.api import urls, views, serializers

import reviews
from reviews.api import urls, views, serializers

import calendars
from calendars.api import urls, views, serializers

import appointments
from appointments.api import urls, views, serializers

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),

    # REST Framework URLs
    path('api/accounts/', include(accounts.api.urls, namespace='accounts_api')),
    path('api/users/', include(users.api.urls, namespace='users_api')),
    path('api/coaches/', include(coaches.api.urls, namespace='coaches_api')),
    path('api/reviews/', include(reviews.api.urls, namespace='reviews_api')),
    path('api/calendars/', include(calendars.api.urls, namespace='calendars_api')),
    path('api/appointments/', include(appointments.api.urls, namespace='appointments_api'))
]
