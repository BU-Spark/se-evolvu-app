# Generated by Django 3.1.7 on 2021-04-26 01:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coaches', '0002_auto_20210425_2133'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coach',
            name='description',
            field=models.TextField(default=''),
        ),
    ]