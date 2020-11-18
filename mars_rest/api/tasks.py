from time import sleep
from celery import shared_task
from .models import Temperature
from urllib.request import urlopen, Request
import json
import sys
from .config import API_KEY

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
            
        else:
            max_temp_ = 'NaN'
            min_temp_ = 'NaN'
            avg_temp_ = 'NaN'
        season_ = data[sol]['Season']
        first_utc_ = data[sol]['First_UTC']
        last_utc_ = data[sol]['Last_UTC']

        Temperature.objects.create(
            Sol = Sol_,
            max_temp = max_temp_,
            min_temp= min_temp_,
            avg_temp = avg_temp_,
            season = season_,
            first_utc = first_utc_,
            last_utc = last_utc_

        )
    sleep(5)
    sys.exit()

@shared_task()
def update_data():
    pass


if not Temperature.objects.all():
    get_data()
    

