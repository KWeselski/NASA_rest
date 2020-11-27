from time import sleep
from celery import shared_task
from .models import Temperature
from urllib.request import urlopen, Request
import json
import sys
from .config import API_KEY
from datetime import date

@shared_task
def get_data():
    print('Getting data from api ...')
    req = Request('https://api.nasa.gov/insight_weather/?api_key={0}&feedtype=json&ver=1.0'.format(API_KEY),headers={'User-Agent': 'Mozilla/5.0'})
    data = json.loads(urlopen(req).read().decode())
    sols = data['sol_keys']
    for sol in sols:
        Sol_ = sol
        if "AT" in data[sol]:
            max_temp_ = data[sol]['AT']["mx"]
            min_temp_ = data[sol]['AT']["mn"]
            avg_temp_ = data[sol]['AT']['av']
            max_wind_ = data[sol]['HWS']["mx"]
            min_wind_ = data[sol]['HWS']["mn"]
            avg_wind_ = data[sol]['HWS']["av"]
            max_press_ = data[sol]['PRE']["mx"]
            min_press_ = data[sol]['PRE']["mn"]
            avg_press_ = data[sol]['PRE']["av"]
            direction_ = data[sol]['WD']['most_common']['compass_point']
        else:
            max_temp_ = 'NaN'
            min_temp_ = 'NaN'
            avg_temp_ = 'NaN'

        season_ = data[sol]['Season']
        first_utc_ = data[sol]['First_UTC']
        last_utc_ = data[sol]['Last_UTC']

        
        
        Temperature.objects.get_or_create(
            Sol = Sol_,
            max_temp = max_temp_,
            min_temp= min_temp_,
            avg_temp = avg_temp_,
            max_wind = max_wind_,
            min_wind = min_wind_,
            avg_wind = avg_wind_,
            max_press = max_press_,
            min_press = min_press_,
            avg_press = avg_press_,
            direction = direction_,
            season = season_,
            first_utc = first_utc_,
            last_utc = last_utc_
        )
    sleep(5)
    sys.exit()

@shared_task()
def update_data():
    current_date = str(date.today())

    temp = Temperature.objects.all().order_by("-Sol")[0]
    date_temp = str((temp.first_utc))[:10]
    #date_temp = date_temp
    if current_date > date_temp:
        get_data()
    else:
        pass
    
    
if not Temperature.objects.all():
    get_data()
else:
    update_data()

