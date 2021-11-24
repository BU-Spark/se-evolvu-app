import os
import requests
from utils import convertZipToLatLon
from django.shortcuts import render
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth import authenticate, login

from accounts.api.serializers import RegistrationSerializer
from coaches.api.serializers import CoachSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

import json


# Create your views here
@api_view(['POST', ])
def registration_view(request):

    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}

    if serializer.is_valid():
        account = serializer.save()
        data['response'] = "New user successfully registered."
        data['email'] = account.email
        data['username'] = account.username
        data['first_name'] = account.first_name
        data['last_name'] = account.last_name
        token = Token.objects.get(user=account).key
        data['token'] = token
        data['slug'] = account.slug
    else:
        data = serializer.errors
    return Response(data)

@api_view(['POST', ])
def coach_registration_view(request):

    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}

    if serializer.is_valid():
        account = serializer.save()
        # Get Latitude and Longitude based on zipcode 
        [lat, lon] = convertZipToLatLon(request.data['zip_code'])
        focus = request.data['focus']
        coachSerializer = CoachSerializer(data=request.data)
        if coachSerializer.is_valid():
            coach_profile = coachSerializer.save(account, lat, lon, focus)
            data['response'] = "New coach successfully registered."
            data['email'] = account.email
            data['username'] = account.username
            data['first_name'] = account.first_name
            data['last_name'] = account.last_name
            token = Token.objects.get(user=account).key
            data['token'] = token
            data['slug'] = account.slug
        else:
            print(coachSerializer.error_messages)
            data = coachSerializer.errors
            
    else:
        data = serializer.errors
    print(data)
    return Response(data)


"""
@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},
                    status=HTTP_200_OK)
"""


"""
@api_view(["POST", ])
def login_view(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    username = body['username'] #request.POST.get("username", '')
    #print(request.POST)
    #username = request.POST["username"]
    #password = request.POST["password"]
    #print(username)
    #print(password)
    password = body['password'] #request.POST.get("password", '')
    user = authenticate(request, username=username, password=password)

    print(username)
    print(password)

    #return Response("hello")
    print(user)
    
    if user is not None:
        login(request, user)
        return Response({'Message': 'Successfully logged in',
                        'slug': user.slug})
    
    return Response("Error logging in")
  """  


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'message': 'Successfully logged in', 'token': token.key, 'slug': user.slug})

# @api_view(['GET', ])
# def api_detail_coach_view(request, slug):
#     try:
#         coach_profile = Coach.objects.get(slug=slug)
#     except Coach.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == "GET":
#         serializer = CoachSerializer(coach_profile)
#         return Response(serializer.data)

# @api_view(['PUT', ])
# def api_update_coach_view(request, slug):
#     try:
#         coach_profile = Coach.objects.get(slug=slug)
#     except Coach.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    
#     if request.method == "PUT":
#         serializer = CoachSerializer(coach_profile)
#         data = {}
#         if serializer.is_valid():
#             serializer.save()
#             data["Success"] = "Coach profile successfully updated."
#             return Response(data=data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['DELETE', ])
# def api_delete_coach_view(request, slug):
#     try:
#         coach_profile = Coach.objects.get(slug=slug)
#     except Coach.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    
#     if request.method == "DELETE":
#         operation = coach_profile.DELETE()
#         data = {}
#         if operation == True:
#             data["Success"] = "Successfully deleted specified coach."
#         else:
#             data["Failure"] = "Unable to delete specified coach."
#         return Response(data=data)

# class ApiCoachListView(ListAPIView):
#     queryset = Coach.objects.all() 
#     #print("This is the queryset:", queryset)
#     serializer_class = CoachSerializer
#     # authentication_classes = (TokenAuthentication,)
#     # permission_classes = (IsAuthenticated,)
#     pagination_class = PageNumberPagination
#     filter_backends = (SearchFilter, OrderingFilter,)
#     search_fields = ('last_name',)