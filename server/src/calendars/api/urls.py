from django.urls import path

from calendars.api.views import (
    get_coach_calendar,
    update_coach_calendar
)

app_name = 'calendars'


urlpatterns = [
    path('get_calendar/<slug>/', get_coach_calendar, name='get_calendar'),
    path('update_calendar/<slug>/', update_coach_calendar, name='update_calendar')
]