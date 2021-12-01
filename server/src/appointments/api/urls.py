from django.urls import path

from appointments.api.views import (
    create_appointment,
    complete_appointment,
    FetchAppointmentsOnDate,
    FetchAppointmentsInNextWeek
)

app_name = 'appointments'


urlpatterns = [
    path('create_appointment/', create_appointment, name='create_appointment'),
    path('complete_appointment/', complete_appointment, name='complete_appointment'),
    path('get_appointments_on_date/', FetchAppointmentsOnDate.as_view(), name='get_appointments_on_date'),
    path('get_appointments_next_week/', FetchAppointmentsInNextWeek.as_view(), name='get_appointments_next_week')
]