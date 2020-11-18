from django.shortcuts import render
from rest_framework import generics
from .models import Temperature
from .serializers import TemperatureSerialzer
# Create your views here.

class ListTemperatureView(generics.ListAPIView):
    queryset = Temperature.objects.all()
    serializer_class = TemperatureSerialzer