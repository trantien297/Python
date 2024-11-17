from django.urls import path, include
from .views import StaffListView

urlpatterns = [
    path('', StaffListView.as_view(), name="staff-list")
]