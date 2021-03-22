from django.urls import path

from coaches.api.views import (
    api_detail_coach_view,
    api_update_coach_view,
    ApiCoachListView
)

app_name = 'coaches'

urlpatterns = [
    path('list', ApiCoachListView.as_view(), name='list'),
    path('<slug>/update/', api_update_coach_view, name='update'),
    path('<slug>', api_detail_coach_view, name='detail'),
]