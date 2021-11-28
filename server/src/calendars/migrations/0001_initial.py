# Generated by Django 3.1.7 on 2021-04-21 02:37

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.COACH_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Calendar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coach', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='coach_profile', to=settings.COACH_MODEL)),
                ('monday', models.TextField(default='')),
                ('tuesday', models.TextField(default='')),
                ('wednesday', models.TextField(default='')),
                ('thursday', models.TextField(default='')),
                ('friday', models.TextField(default='')),
                ('saturday', models.TextField(default='')),
                ('sunday', models.TextField(default=''))
            ],
        ),
    ]