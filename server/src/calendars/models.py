from django.db import models
from coaches.models import Coach
import json

class Calendar(models.Model):
    coach = models.OneToOneField(Coach, on_delete=models.CASCADE, related_name="coach_profile", unique=True)
    monday = models.TextField(default='')
    tuesday = models.TextField(default='')
    wednesday = models.TextField(default='')
    thursday = models.TextField(default='')
    friday = models.TextField(default='')
    saturday = models.TextField(default='')
    sunday = models.TextField(default='')

    def checkCoachAvailable(self, day, start_time, end_time):
        start_hours = start_time.hour
        end_hours = end_time.hour
        # Find the day that the client is requesting
        if day == "monday":
            timesOnDayString = self.monday
        elif day == "tuesday":
            timesOnDayString = self.tuesday
        elif day == "wednesday":
            timesOnDayString = self.wednesday
        elif day == "thursday":
            timesOnDayString = self.thursday
        elif day == "friday":
            timesOnDayString = self.friday
        elif day == "saturday":
            timesOnDayString = self.saturday
        else:
            timesOnDayString = self.sunday
        times = json.loads(timesOnDayString)
        time = f"{start_hours} - {end_hours}"
        
        # Check if any times match requested time slot
        for slot in times:  
            # slot is in the form of a "<start_hour> - <end_hour>" e.g ( "11 - 12")
            if slot == time:
                return True
        return False 





    