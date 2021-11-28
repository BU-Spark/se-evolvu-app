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
from coaches.models import Coach
from accounts.models import Account
from calendars.models import Calendar
from calendars.api.serializers import CalendarSerializer

@api_view(['GET', ])
def get_coach_calendar(request, slug):
    # Fetch Account 
    try:
        account = Account.objects.get(slug=slug)
        coach_id = account.id
    except Account.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    # Fetch Coach 
    try:
        coach = Coach.objects.get(coach_id=coach_id)
    except Account.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    try:
        calendar = Calendar.objects.get(coach=coach.id)
        serializer = CalendarSerializer(calendar)
        return Response(serializer.data)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['POST', ])
def update_coach_calendar(request, slug):
    # Fetch Account 
    try:
        account = Account.objects.get(slug=slug)
        coach_id = account.id
    except Account.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    # Fetch Coach 
    try:
        coach = Coach.objects.get(coach_id=coach_id)
    except Account.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    # Update Calendar
    if request.method == "POST":
        serializer = CalendarSerializer(data=request.data['schedule'])
        data = {}
        if serializer.is_valid():
            serializer.update(coach)
            data["Success"] = "Coach calendar successfully updated."
            return Response(data=data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

