from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
# from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from reviews.models import Review
from reviews.api.serializers import ReviewSerializer

class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
