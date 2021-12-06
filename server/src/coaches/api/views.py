from django.core.management.base import BaseCommand
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from django.db.models import Q, F
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from utils import convertLocationToLatLon
# from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from coaches.models import Coach
from accounts.models import Account
from calendars.models import Calendar
from coaches.api.serializers import CoachSerializer, CoachListSerializer#, CoachSearchSerializer
from calendars.api.serializers import CalendarSerializer
from rest_framework.filters import SearchFilter, OrderingFilter
import logging
logger = logging.getLogger("mylogger")


# Create your views here
@api_view(['GET', ])
def api_detail_coach_view(request, slug):
    try:
        coach_profile = Coach.objects.get(coach__slug=slug)
    except Coach.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        serializer = CoachSerializer(coach_profile)

    data = serializer.data
    # Attempt to fetch calendar 
    if Calendar.objects.filter(coach_id=coach_profile.id).exists():
        calendar = Calendar.objects.get(coach_id=coach_profile.id)
        serializer_calendar = CalendarSerializer(calendar)
        data.update({"availability": serializer_calendar.data})
    return Response(data)
    

@api_view(['PUT', ])
def api_update_coach_view(request, slug):
    try:
        coach_profile = Coach.objects.get(coach__slug=slug)
    except Coach.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "PUT":
        serializer = CoachSerializer(coach_profile, data=request.data)
        data = {}
        if serializer.is_valid():
            serializer.save()
            data["Success"] = "Coach profile successfully updated."
            return Response(data=data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST', ])
def api_approve_coach(request, slug):
    try:
        coach_profile = Coach.objects.get(coach__slug=slug)
    except Coach.DoesNotExist:
        print('here')
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "POST":
        try:
            coach_account = Account.objects.get(coach_profile=coach_profile)
        except Account.DoesNotExist:
            print('here2')
            return Response(status=status.HTTP_404_NOT_FOUND)

        coach_profile.approved = True
        coach_account.is_active = True
        coach_profile.save()
        coach_account.save()

        return Response({"status": "200", "message": "Successfully approved coach"})


@api_view(['DELETE', ])
def api_delete_coach_view(request, slug):
    try:
        coach_profile = Coach.objects.get(coach__slug=slug)
    except Coach.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "DELETE":
        operation = coach_profile.delete()
        data = {}
        if operation == True:
            data["Success"] = "Successfully deleted specified coach."
        else:
            data["Failure"] = "Unable to delete specified coach."
        return Response(data=data)

class ApiCoachListView(ListAPIView):
    queryset = Coach.objects.all() 
    serializer_class = CoachSerializer
    authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    pagination_class = PageNumberPagination
    # filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ('last_name',)

class FetchPendingCoaches(ListAPIView):
    queryset = Coach.objects.filter(approved=False)
    serializer_class = CoachSerializer
    authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    pagination_class = PageNumberPagination
    # filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ('last_name',)

'''
class FocusHealthView(ListAPIView):
    serializer_class = CoachSerializer
    pagination_class = PageNumberPagination

    def get_queryset(self):
        return Coach.objects.filter(focus_health=True)

class FocusWellnessView(ListAPIView):
    serializer_class = CoachSerializer
    pagination_class = PageNumberPagination

    def get_queryset(self):
        return Coach.objects.filter(focus_wellness=True)
'''

# class GeneralSearch(ListAPIView):
#     serializer_class = CoachSerializer
#     pagination_class = PageNumberPagination

#     def find_focuses(self, request):
#         if request.method == "GET":
#             # Iterate through all focuses in the request and filter for only the ones set to true
#             search_filter = ''

#             if self.gender == 'F':
#         else:
#             return Coach.objects.all()

class SearchCoaches(ListAPIView):
    serializer_class = CoachSerializer
    def get_queryset(self, *args, **kwargs):
        queryset = Coach.objects.filter(approved=True)
        price = self.request.query_params.get("price")
        location = self.request.query_params.get("location")
        remote = self.request.query_params.get("remote")
        distance = self.request.query_params.get("distance")
        focus_life = self.request.query_params.get('focus_life')
        focus_behavioral_wellness = self.request.query_params.get('focus_behavioral_wellness')
        focus_health_wellness = self.request.query_params.get('focus_health_wellness')
        focus_holistic = self.request.query_params.get('focus_holistic')
        focus_business = self.request.query_params.get('focus_business')
        travel = self.request.query_params.get('travel')
        sortBy = self.request.query_params.get('sortBy')
        [lat, lon] = convertLocationToLatLon(location)
        query = Q()


        if focus_life == "true":
            q = Q(focus_life = True)
            query |= q

        if focus_behavioral_wellness == "true":
            q = Q(focus_behavioral_wellness = True)
            query |= q

        if focus_health_wellness == "true":
            q = Q(focus_health_wellness = True)
            query |= q

        if focus_holistic == "true":
            q = Q(focus_holistic = True)
            query |= q

        if focus_business == "true":
            q = Q(focus_business = True)
            query |= q

        if travel == "true":
            q = Q(travel = True)
            query |= q
        
        queryset = queryset.filter(query)
        remoteQuery = Q()
        if remote == "true":
            q = Q(remote = True)
            remoteQuery = q
        else:
            q = Q(inPerson = True)
            remoteQuery = q
        queryset = queryset.filter(remoteQuery)

        # Price queries 
        priceQueries = Q()
        price = int(price)
        if price:
            if price is not 100:
                # Max that coach is requesting is less than what user is willing to offer
                maxPriceLessThanPrice = Q(maxPrice__lte = price)
                priceQueries |= maxPriceLessThanPrice
                # Or price user is willing to pay is greater than minPrice
                priceGreaterThanMin = Q(minPrice__lte = price)
                priceQueries |= priceGreaterThanMin
                queryset = queryset.filter(priceQueries)
        
        # remove values that are not within distance
        for coach in queryset: 
            distFromZipcode = coach.distanceFromLatLong(lat, lon)
            # Case when the coach is further away from zip than specified 
            if distFromZipcode > int(distance):
                queryset = queryset.filter(~Q(coach_id=coach.coach_id))
        
        # Sort queryset if applicable
        if sortBy == "avg_rating":
            queryset = sorted(queryset, key= lambda coach: coach.avg_rating())
        if sortBy == "distance":
            queryset = sorted(queryset, key= lambda coach: coach.distanceFromLatLong(lat, lon))
        return queryset
