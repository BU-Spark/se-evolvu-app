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
from calendars.models import Calendar


@api_view(['POST', ])
def get_coach_calendar(request, slug):
    
    # Fetch Coach Profile 
    try:
        coach = Coach.objects.get(coach__slug=slug)
    except Coach.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # Fetch Coach's Calendar
    try:
        calendar = Calendar.objects.get(coach=coach)
        return Response(calendar)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)



