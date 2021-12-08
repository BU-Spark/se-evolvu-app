from django.urls import path

from appointments.api.views import (
    create_appointment,
    edit_session_completion,
    cancel_session,
    fetch_appointments_on_date,
    fetch_appointments_in_next_week,
    fetch_appointments_between_two_dates,
    fetch_past_sessions,
    fetch_upcoming_sessions
)

app_name = 'appointments'


urlpatterns = [
    path('create_appointment/', create_appointment, name='create_appointment'),
    path('edit_session_completion/', edit_session_completion, name='edit_session_completion'),
    path('cancel_session/', cancel_session, name='cancel_session'),
    path('get_appointments_on_date/', fetch_appointments_on_date, name='get_appointments_on_date'),
    path('get_appointments_next_week/', fetch_appointments_in_next_week, name='get_appointments_next_week'),
    path('get_appointments_between_two_dates/', fetch_appointments_between_two_dates, name='get_appointments_two_dates'),
    path('get_upcoming_sessions/', fetch_upcoming_sessions, name='get_upcoming_sessions'),
    path('get_past_sessions/', fetch_past_sessions, name='get_past_sessions')   
]