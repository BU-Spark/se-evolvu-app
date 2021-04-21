from django.urls import path

from coaches.api.views import (
    SearchCoaches,
    api_detail_coach_view,
    api_update_coach_view,
    ApiCoachListView,
    # FocusLifeView,
    # FocusBehavioralView,
    # FocusHWView,
    # FocusHolisticView,
    # FocusBusinessView,
    #ApiCoachListView
)

app_name = 'coaches'

urlpatterns = [
    path('list', ApiCoachListView.as_view(), name='list'),
    # path('search/life/', FocusLifeView.as_view(), name='search_life'),
    # path('search/behavioral/', FocusBehavioralView.as_view(), name='search_behavioral'),
    # path('search/hw/', FocusHWView.as_view(), name='search_hw'),
    # path('search/holistic/', FocusHolisticView.as_view(), name='search_holistic'),
    # path('search/business/', FocusBusinessView.as_view(), name='search_business'),
    path('search', SearchCoaches.as_view(), name='search'),
    path('<slug>/update/', api_update_coach_view, name='update'),
    path('<slug>', api_detail_coach_view, name='detail'),
]