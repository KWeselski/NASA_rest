# Generated by Django 3.0.8 on 2020-11-27 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20201127_1329'),
    ]

    operations = [
        migrations.AlterField(
            model_name='temperature',
            name='Sol',
            field=models.CharField(db_index=True, max_length=10, unique=True),
        ),
    ]
