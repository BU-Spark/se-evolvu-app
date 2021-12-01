# Generated by Django 3.1.7 on 2021-04-21 02:37

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.COACH_MODEL),
        migrations.swappable_dependency(settings.USER_PROFILE_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('appointment_id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('coach', models.ForeignKey(to=settings.COACH_MODEL, on_delete=models.CASCADE, related_name="appointment_coach")),
                ('user_profile', models.ForeignKey(to=settings.USER_PROFILE_MODEL, on_delete=models.CASCADE, related_name="appointment_client")),
                ('date', models.DateField()),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('description', models.CharField(default='', max_length=180)),
                ('session_completed', models.BooleanField(default=False)),
                ('has_coach_accepted', models.BooleanField(default=False)),
                ('has_client_accepted', models.BooleanField(default=False)),
            ],
        ),
    ]
