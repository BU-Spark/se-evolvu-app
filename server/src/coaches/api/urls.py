from django.urls import path

from coaches.api.views import (
    SearchCoaches,
    api_detail_coach_view,
    api_update_coach_view,
    ApiCoachListView,
    FetchPendingCoaches,
    api_approve_coach
)

app_name = 'coaches'

urlpatterns = [
    path('list', ApiCoachListView.as_view(), name='list'),
    path('pending', FetchPendingCoaches.as_view(), name='pending'),
    path('search', SearchCoaches.as_view(), name='search'),
    path('approve/<slug>/', api_approve_coach, name='approve'),
    path('<slug>/update/', api_update_coach_view, name='update'),
    path('<slug>', api_detail_coach_view, name='detail'),
]