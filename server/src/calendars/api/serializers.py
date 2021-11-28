from rest_framework import serializers

from calendars.models import Calendar

class CalendarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendar
        fields = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    def save(self, coach):
        calendar = Calendar(
            coach = coach,
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

    def update(self, coach):
        oldCalendar = Calendar.objects.get(coach=coach)
        oldCalendar.delete()
        # FIX: Manually update values without deleting first because right now there is a parsing error when you manually update values
        calendar = Calendar(
            coach = coach,
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