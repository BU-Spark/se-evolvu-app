from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
# from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from rest_framework.authtoken.models import Token
from appointments.api.serializers import AppointmentSerializer
from users.models import UserProfile
from coaches.models import Coach
from accounts.models import Account
from calendars.models import Calendar
from appointments.models import Appointment
from calendars.api.serializers import CalendarSerializer
import datetime


@api_view(['POST', ])
def create_appointment(request):
    # FIX: Clean up this function and abstract to helper methods
    try:
        # Date: mm/dd/yyyy
        # Day: day of the week in lowercase
        # Start Time: hh:mm
        # End Time: hh:mm
        coach_slug = request.data['coach_slug']
        user_slug = request.data['user_slug']
        dayOfWeek = request.data['dayOfWeek']
        data = {}
        date = convertDateToPythonDate(request.data['date'])
        start_time = convertTimeToPythonTime(request.data['start_time'])
        end_time = convertTimeToPythonTime(request.data['end_time'])
        
        # Fetch Coach and User
        try:
            coach = Coach.objects.get(coach__slug=coach_slug)
            user_account = Account.objects.get(slug=user_slug)
            user = UserProfile.objects.get(user_id=user_account.id)
        except:
            data["message"] = "Unable to find coach or user"
            return Response({"message": "Unable to find coach or user"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Fetch Coach calendar and check if appointment time is available 
        # Turn this into queryset
        try:
            calendar = Calendar.objects.get(coach=coach.id)
            coachIsAvailable = calendar.checkCoachAvailable(dayOfWeek, start_time, end_time)
            otherAppointments = Appointment.objects.filter(date=date, start_time=start_time, end_time=end_time, coach_id=coach.id, user_profile_id=user.id).exists()
            if coachIsAvailable and not otherAppointments:
                params = {
                    "date": date,
                    "start_time": start_time,
                    "end_time": end_time,
                    "description": request.data['description'],
                    "session_completed": False,
                    "has_client_accepted": False,
                    "has_coach_accepted": False
                }
                serializer = AppointmentSerializer(data=params)
                if serializer.is_valid():
                    serializer.save(coach, user)
                    return Response({"message": "Successfully booked an appointment"})
                else:
                    print(serializer.errors)
                    return Response(serializer.errors)
            else:
                return Response({"message": "Unable to find an available time"}, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({"message": "Unable to book an appointment"},status=status.HTTP_400_BAD_REQUEST)
    except:
            return Response({"message": "Bad request! Please try again later"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST', ])
def complete_appointment(request):
    # Date: mm/dd/yyyy
    # Day: day of the week in lowercase
    # Start Time: hh:mm
    # End Time: hh:mm
    coach_slug = request.data['coach_slug']
    date = request.data['date']
    start_time = request.data['start_time']
    end_time = request.data['end_time']

    date = convertDateToPythonDate(request.data['date'])
    start_time = convertTimeToPythonTime(request.data['start_time'])
    end_time = convertTimeToPythonTime(request.data['end_time'])

    # Find coach
    try:
        coach = Coach.objects.get(coach__slug = coach_slug)
    except:
        return Response({"message": "Unable to find coach"}, status=status.HTTP_400_BAD_REQUEST)

    # Find Appointment and set completion to true
    try:
        appointment = Appointment.objects.get(coach_id=coach.id, start_time=start_time, end_time=end_time, date=date)
        appointment.completeSession()
        return Response({"message": "Completed session"}, status=status.HTTP_200_OK)
    except Appointment.DoesNotExist:
        return Response({"message": "Unable to find the requested appointment"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', ])
def fetch_appointments_on_date(request):

    coach_slug = request.query_params.get('coach_slug')
    session_completed = request.query_params.get('session_completed')
    date = request.query_params.get('date')
    # date format is mm/dd/yyyy
    date_to_check = convertDateToPythonDate(date)
    coach = Coach.objects.get(coach__slug=coach_slug)
    queryset = Appointment.objects.filter(coach_id=coach.id)

    if date_to_check:
        date_query = Q(date=date_to_check)
        queryset = queryset.filter(date_query)
    
    if session_completed:
        bool_to_check = True if session_completed == 'True' else False 
        session_query = Q(session_completed=bool_to_check)
        queryset = queryset.filter(session_query)
    
    # Iterate through queryset 
    ret = []
    for appointment in queryset.values():
        # Convert User_Profile_ID to first_name and last_name
        user_profile = UserProfile.objects.get(id=appointment['user_profile_id'])
        user = Account.objects.get(id=user_profile.user_id)
        first_name = user.first_name
        last_name = user.last_name
        ret.append({
            "appointment_id": appointment["appointment_id"],
            "coach_id": appointment["coach_id"],
            "client_first_name": first_name,
            "client_last_name": last_name,
            "date": appointment["date"],
            "start_time": appointment['start_time'],
            "end_time": appointment['end_time']
        })
    return Response(ret)


@api_view(['GET', ])
def fetch_appointments_in_next_week(request):

    coach_slug = request.query_params.get('coach_slug')
    session_completed = request.query_params.get('session_completed')
    date = request.query_params.get('date')
    # date format is mm/dd/yyyy
    date_to_check = convertDateToPythonDate(date)
    next_week_date = date_to_check + datetime.timedelta(days=7)
    coach = Coach.objects.get(coach__slug=coach_slug)
    queryset = Appointment.objects.filter(coach_id=coach.id)

    if date_to_check and next_week_date:
        greater_than_current_date = Q(date__gte=date_to_check)
        less_than_end_of_week = Q(date__lte=next_week_date)
        queryset = queryset.filter(greater_than_current_date & less_than_end_of_week)
    if session_completed:
        bool_to_check = True if session_completed == 'True' else False 
        session_query = Q(session_completed=bool_to_check)
        queryset = queryset.filter(session_query)
    
    # Iterate through queryset 
    ret = []
    for appointment in queryset.values():
        # Convert User_Profile_ID to first_name and last_name
        user_profile = UserProfile.objects.get(id=appointment['user_profile_id'])
        user = Account.objects.get(id=user_profile.user_id)
        first_name = user.first_name
        last_name = user.last_name
        ret.append({
            "appointment_id": appointment["appointment_id"],
            "coach_id": appointment["coach_id"],
            "client_first_name": first_name,
            "client_last_name": last_name,
            "date": appointment["date"],
            "start_time": appointment['start_time'],
            "end_time": appointment['end_time']
        })
    return Response(ret)

def convertDateToPythonDate(date):
    # parameter date in the format of mm/dd/yyyy
    # returns python datetime
    try:
        [month, day, year] = date.split("/")
        date = datetime.date(year=int(year), month=int(month), day=int(day))
        return date
    except:
        return None

def convertTimeToPythonTime(time):
    try:
        [hours, mins] = time.split(":")
        # Convert hh:mm to python datetime time 
        time = datetime.time(hour=int(hours), minute=int(mins))
        return time 
    except:
        return None