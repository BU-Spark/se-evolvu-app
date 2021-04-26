from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from users.models import UserProfile
from users.api.serializers import UserProfileSerializer
from rest_framework.filters import SearchFilter, OrderingFilter

# Create your views here
@api_view(['GET', ])
def api_detail_userprof_view(request, slug):
    try:
        user_profile = UserProfile.objects.get(user__slug=slug)
    except UserProfile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = UserProfileSerializer(user_profile)
        return Response(serializer.data)

# Might not need this
class ApiUsersListView(ListAPIView):
    queryset = UserProfile.objects.all()
    #print("This is the queryset:", queryset)
    serializer_class = UserProfileSerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter,)
    search_fields = ('last_name',)