from django.urls import path

from appointments.api.views import (
    create_appointment,
    complete_appointment,
    fetch_appointments_on_date,
    fetch_appointments_in_next_week,
)

app_name = 'appointments'


urlpatterns = [
    path('create_appointment/', create_appointment, name='create_appointment'),
    path('complete_appointment/', complete_appointment, name='complete_appointment'),
    path('get_appointments_on_date/', fetch_appointments_on_date, name='get_appointments_on_date'),
    path('get_appointments_next_week/', fetch_appointments_in_next_week, name='get_appointments_next_week')
]