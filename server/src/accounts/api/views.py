from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from accounts.api.serializers import RegistrationSerializer

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token


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
        # data['slug'] = account.slug
    else:
        data = serializer.errors
    return Response(data)

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