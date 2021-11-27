from django.urls import path

from calendars.api.views import (
    get_coach_calendar
)

app_name = 'calendars'


urlpatterns = [
    path('get', get_coach_calendar, name='list'),
]