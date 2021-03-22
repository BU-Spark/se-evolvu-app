from django.urls import path

from users.api.views import (
    api_detail_userprof_view,
    ApiUsersListView
)

app_name = 'users'

urlpatterns = [
    path('list', ApiUsersListView.as_view(), name="list"),
    path('<slug>', api_detail_userprof_view, name='detail'),
]