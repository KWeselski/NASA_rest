# Generated by Django 3.0.8 on 2020-11-18 21:02

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='temperature',
            name='date',
        ),
        migrations.AddField(
            model_name='temperature',
            name='first_utc',
            field=models.DateTimeField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='temperature',
            name='last_utc',
            field=models.DateTimeField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
    ]