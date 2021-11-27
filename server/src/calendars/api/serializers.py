from rest_framework import serializers

from calendars.models import Calendar

class CalendarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendar
        fields = ['coach', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    def save(self):
        calendar = Calendar(
            coach = self.validated_data['coach'],
            sunday = self.validated_data['sunday'],
            monday = self.validated_data['monday'],
            tuesday = self.validated_data['tuesday'],
            wednesday = self.validated_data['wednesday'],
            thursday = self.validated_data['thursday'],
            friday = self.validated_data['friday'],
            saturday = self.validated_data['saturday'],
        )

        calendar.save()
        return calendar