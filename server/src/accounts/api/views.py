from utils import convertLocationToLatLon
from django.shortcuts import render
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth import authenticate, login

from accounts.api.serializers import RegistrationSerializer
from coaches.api.serializers import CoachSerializer
from calendars.api.serializers import CalendarSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

import json


# Create your views here
@api_view(['POST', ])
def registration_view(request):

    if request.method == 'POST':
        account_params = {
            "first_name": request.data['first_name'],
            "last_name": request.data['last_name'],
            "email": request.data['email'],
            "username": request.data['username'],
            "password": request.data['password'],
            "password2": request.data['password2'],
            "dob": request.data['dob'] if 'dob' in request.data else "",
            "street": request.data['street'] if 'street' in request.data else "",
            "city": request.data['city'] if 'city' in request.data else "",
            "state": request.data['state'] if 'state' in request.data else "",
            "country": request.data['country'] if 'country' in request.data else "",
            "zip_code": request.data['zip_code'] if 'zip_code' in request.data else "",
            "is_customer": request.data['is_customer'] if 'is_customer' in request.data else False,
            "is_coach": request.data['is_coach'] if 'is_coach' in request.data else True,
            "is_active": request.data['is_active'] if 'is_active' in request.data else True,
        }
        serializer = RegistrationSerializer(data=account_params)
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
        account_params = {
            "first_name": request.data['first_name'],
            "last_name": request.data['last_name'],
            "email": request.data['email'],
            "username": request.data['username'],
            "password": request.data['password'],
            "password2": request.data['password2'],
            "dob": request.data['dob'] if 'dob' in request.data else "",
            "street": request.data['street'] if 'street' in request.data else "",
            "city": request.data['city'] if 'city' in request.data else "",
            "state": request.data['state'] if 'state' in request.data else "",
            "country": request.data['country'] if 'country' in request.data else "",
            "zip_code": request.data['zip_code'] if 'zip_code' in request.data else "",
            "is_customer": request.data['is_customer'] if 'is_customer' in request.data else False,
            "is_coach": request.data['is_coach'] if 'is_coach' in request.data else True,
            "is_active": request.data['is_active'] if 'is_active' in request.data else True,
        }
        serializer = RegistrationSerializer(data=account_params)
        data = {}

    if serializer.is_valid():
        # Create Account
        account = serializer.save()
        focus = request.data['focus']
        # Get Latitude and Longitude based on city, state or zipcode 
        location = ""
        if (request.data['city'] and request.data['state']):
            location = request.data['city'] + ", " + request.data['state']
        else:
            location = request.data['zip_code']
        try: 
            # Convert location to lat and lon values using MapQuest API
            [lat, lon] = convertLocationToLatLon(location)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        # Create Coach
        coachSerializer = CoachSerializer(data=request.data)
        if coachSerializer.is_valid():
            coach_profile = coachSerializer.save(account, lat, lon, focus)
            calendarObj = request.data['schedule']
            # Create Calendar with Coach profile 
            calendarSerializer = CalendarSerializer(data=calendarObj)
            # If invalid, exception will be raised
            if calendarSerializer.is_valid():
                calendar = calendarSerializer.save(coach_profile)
                data['response'] = "New coach successfully registered."
                data['email'] = account.email
                data['username'] = account.username
                data['first_name'] = account.first_name
                data['last_name'] = account.last_name
                token = Token.objects.get(user=account).key
                data['token'] = token
                data['slug'] = account.slug
            else:
                data = calendarSerializer.errors
                return Response(data, status=status.HTTP_400_BAD_REQUEST)
        else:
            data = coachSerializer.errors
            return Response(data, status=status.HTTP_400_BAD_REQUEST)
    else:
        data = serializer.errors
        return Response(data, status=status.HTTP_400_BAD_REQUEST)
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
