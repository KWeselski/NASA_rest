import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mars_rest.settings')

app = Celery('mars_rest')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()

