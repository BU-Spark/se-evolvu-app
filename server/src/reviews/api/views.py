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
from reviews.models import Review
from coaches.models import Coach
from accounts.models import Account

from reviews.api.serializers import ReviewSerializer


@api_view(['POST', ])
def create_coach_review(request, slug):
    
    # Fetch Coach Profile (only fetches their pk)
    try:
        coach_profile = Coach.objects.values_list('id').get(coach__slug=slug)
    except Coach.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # Fetch Reviewer's Account (only fetches their pk)
    try:
        token = request.data['reviewer']['token']
        user_id = Token.objects.get(key=token).user_id
        user = Account.objects.values_list('id').get(id=user_id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    review_data = {
        'coach': coach_profile[0],
        'reviewer': user[0],
        'rating': request.data['rating'],
        'body': request.data['body'],
    }

    # Validate data
    serializer = ReviewSerializer(data=review_data)
    if serializer.is_valid():
        # Create Review if all fields are valid
        serializer.save()
        return Response({
            "message": "success",
            "status": 200
        })
    else:
        data = serializer.errors
        return Response(data)

@api_view(['POST',])
def approve_coach_review(request):
    print(request.data)
    coach = request.data['coach']
    reviewer = request.data['reviewer']

    try:
        review = Review.objects.get(coach=coach, reviewer=reviewer)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    review.approval = True
    review.save()

    review = Review.objects.get(coach=coach, reviewer=reviewer)
    return Response({"message": "Successfully approved review."})

class ReviewList(ListAPIView):
    queryset = Review.objects.filter(approval=False)
    serializer_class = ReviewSerializer 
    authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    pagination_class = PageNumberPagination
    # filter_backends = (SearchFilter, OrderingFilter)
    # search_fields = ('last_name',)
    

class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
