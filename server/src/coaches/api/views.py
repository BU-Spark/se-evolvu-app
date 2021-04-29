from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from django.db.models import Q
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
# from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from coaches.models import Coach
from accounts.models import Account
from coaches.api.serializers import CoachSerializer, CoachListSerializer#, CoachSearchSerializer
from rest_framework.filters import SearchFilter, OrderingFilter

# Create your views here
@api_view(['GET', ])
def api_detail_coach_view(request, slug):
    try:
        coach_profile = Coach.objects.get(coach__slug=slug)
    except Coach.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = CoachSerializer(coach_profile)
        return Response(serializer.data)

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
    # pagination_class = PageNumberPagination

    
    #status = self.request.query_params.get('status', None)
    # gender = self.request.query_params.get('gender', 'N')
    # focus_life = self.request.query_params.get('focus_life', None)
    # focus_behavioral = self.request.query_params.get('focus_behavioral', None)
    # focus_health_wellness = self.request.query_params.get('focus_health_wellness', None)
    # focus_holistic = self.request.query_params.get('focus_holistic', None)
    # focus_nutrition_fitness = self.request.query_params.get('focus_nutrition_fitness', None)
    # focus_business = self.request.query_params.get('focus_business', None)
    # travel = self.request.query_params.get('travel', None)

    def get_queryset(self):
        queryset = Coach.objects.filter(approved=True)

        focus_life = self.request.query_params.get('focus_life')
        focus_behavioral = self.request.query_params.get('focus_behavioral')
        focus_health_wellness = self.request.query_params.get('focus_health_wellness')
        focus_holistic = self.request.query_params.get('focus_holistic')
        focus_nutrition_fitness = self.request.query_params.get('focus_nutrition_fitness')
        focus_business = self.request.query_params.get('focus_business')
        travel = self.request.query_params.get('travel')
        query = Q()

        """
        print(life)
        print(behavioral)
        print(health_wellness)
        print(holistic)
        print(nutrition_fitness)
        print(business)
        print(coach_travel)
        """

        if focus_life == "True":
            q = Q(focus_life = True)
            #print("here1")
            query |= q

        if focus_behavioral == "True":
            q = Q(focus_behavioral = True)
            #print("here2")
            query |= q

        if focus_health_wellness == "True":
            q = Q(focus_life = True)
            #print("here3")
            query |= q

        if focus_holistic == "True":
            q = Q(focus_holistic = True)
            #print("here4")
            query |= q
        
        if focus_nutrition_fitness == "True":
            q = Q(focus_nutrition_fitness = True)
            #print("here5")
            query |= q

        if focus_business == "True":
            q = Q(focus_business = True)
            #print("here6")
            query |= q

        if travel == "True":
            q = Q(travel = True)
            #print("here7")
            query |= q

        #print("here8")

        queryset = queryset.filter(query)

        # if status is not None:
        #     status = status.split('|')
        #     query = Q()
        #     for x in status:
        #         q = Q(status=x)
        #         query |= q
        #     queryset = queryset.filter(query)
        return queryset

    

    """
    gender 
    focus_life 
    focus_behavioral 
    focus_health_wellness 
    focus_holistic 
    focus_nutrition_fitness 
    focus_business 
    travel 

    if holistic ===true:
        add to filter
    """

# class FocusLifeView(ListAPIView):
#     serializer_class = CoachSerializer
#     pagination_class = PageNumberPagination

#     def get_queryset(self):
#         return Coach.objects.filter(focus_life=True)

# class FocusBehavioralView(ListAPIView):
#     serializer_class = CoachSerializer
#     pagination_class = PageNumberPagination

#     def get_queryset(self):
#         return Coach.objects.filter(focus_behavioral=True)

# class FocusHWView(ListAPIView):
#     serializer_class = CoachSerializer
#     pagination_class = PageNumberPagination

#     def get_queryset(self):
#         return Coach.objects.filter(focus_health_wellness=True)

# class FocusHolisticView(ListAPIView):
#     serializer_class = CoachSerializer
#     pagination_class = PageNumberPagination

#     def get_queryset(self):
#         return Coach.objects.filter(focus_holistic=True)

#
# class FocusNFView(ListAPIView):
#     serializer_class = CoachSerializer
#     pagination_class = PageNumberPagination

#     def get_queryset(self):
#         return Coach.objects.filter(focus_nutrition_fitness=True)
#

# class FocusBusinessView(ListAPIView):
#     serializer_class = CoachSerializer
#     pagination_class = PageNumberPagination

#     def get_queryset(self):
#         return Coach.objects.filter(focus_business=True)