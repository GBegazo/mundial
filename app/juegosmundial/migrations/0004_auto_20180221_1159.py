# Generated by Django 2.0.1 on 2018-02-21 16:59

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('juegosmundial', '0003_apuestas'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Apuestas',
            new_name='Apuesta',
        ),
    ]
