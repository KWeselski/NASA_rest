from rest_framework import serializers
from .models import Temperature

class TemperatureSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Temperature
        fields = ['Sol', 'max_temp','min_temp','avg_temp','season','first_utc','last_utc']