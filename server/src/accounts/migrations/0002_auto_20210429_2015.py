# Generated by Django 3.1.7 on 2021-04-29 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='is_customer',
            field=models.BooleanField(default=False),
        ),
    ]
