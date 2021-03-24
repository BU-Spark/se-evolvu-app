from django.urls import path

from coaches.api.views import (
    api_detail_coach_view,
    api_update_coach_view,
    ApiCoachListView,
    FocusHealthView,
    FocusWellnessView,
    FocusHWView,
    FocusHolisticView,
    FocusLifeView,
    FocusBehavorialView
    #ApiCoachListView
)

app_name = 'coaches'

urlpatterns = [
    path('list', ApiCoachListView.as_view(), name='list'),
    path('search/health/', FocusHealthView.as_view(), name='search_health'),
    path('search/wellness/', FocusWellnessView.as_view(), name='search_wellness'),
    path('search/hw/', FocusHWView.as_view(), name='search_hw'),
    path('search/holistic/', FocusHolisticView.as_view(), name='search_holistic'),
    path('search/life/', FocusLifeView.as_view(), name='search_life'),
    path('search/behavioral/', FocusBehavorialView.as_view(), name='search_behavioral'),
    path('<slug>/update/', api_update_coach_view, name='update'),
    path('<slug>', api_detail_coach_view, name='detail'),
]