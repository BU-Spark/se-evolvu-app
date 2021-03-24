from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from coaches.models import Coach
from coaches.api.serializers import CoachSerializer#, CoachSearchSerializer
from rest_framework.filters import SearchFilter, OrderingFilter

# Create your views here
@api_view(['GET', ])
def api_detail_coach_view(request, slug):
    try:
        coach_profile = Coach.objects.get(slug=slug)
    except Coach.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = CoachSerializer(coach_profile)
        return Response(serializer.data)

@api_view(['PUT', ])
def api_update_coach_view(request, slug):
    try:
        coach_profile = Coach.objects.get(slug=slug)
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

@api_view(['DELETE', ])
def api_delete_coach_view(request, slug):
    try:
        coach_profile = Coach.objects.get(slug=slug)
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
    #print("This is the queryset:", queryset)
    serializer_class = CoachSerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter, DjangoFilterBackend)
    search_fields = ('focus_wellness',)