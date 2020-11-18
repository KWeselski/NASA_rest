from django.urls import path
from .views import ListTemperatureView
urlpatterns = [
    path('',ListTemperatureView.as_view())
]
