from django.db import models
from coaches.models import Coach
from users.models import UserProfile


class Appointment(models.Model):
    appointment_id = models.AutoField(primary_key=True, auto_created=True, serialize=False)
    coach = models.ForeignKey(Coach, on_delete=models.CASCADE, related_name="appointment_coach")
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="appointment_client")
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    description = models.TextField(default='', max_length=180, blank=True)
    session_completed = models.BooleanField(default=False)
    has_coach_accepted = models.BooleanField(default=False)
    has_client_accepted = models.BooleanField(default=False)

    
    def completeSession(self):
        self.session_completed = True