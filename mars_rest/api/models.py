from django.db import models

# Create your models here.
class Temperature(models.Model):
    Sol = models.CharField(max_length=10)
    max_temp = models.CharField(max_length=15)
    min_temp = models.CharField(max_length=15)
    avg_temp = models.CharField(max_length=15)
    season = models.CharField(max_length=30)
    first_utc = models.DateTimeField(max_length=100)
    last_utc = models.DateTimeField(max_length=100)

    def __str__(self):
        return self.Sol
    