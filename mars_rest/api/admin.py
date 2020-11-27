from django.contrib import admin
from .models import Temperature
# Register your models here.

@admin.register(Temperature)
class TemperatureAdmin(admin.ModelAdmin):
    list_display = ['Sol', 'max_temp', 'min_temp',
                'avg_temp', 'max_wind', 'min_wind',
                'avg_wind', 'max_press', 'min_press',
                'avg_press', 'season', 'first_utc', 'last_utc']