from rest_framework import serializers

from appointments.models import Appointment



class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['date', 'start_time', 'end_time', 'description', 'session_completed', 'has_client_accepted', 'has_coach_accepted']

    def save(self, coach, client):
        appointment = Appointment(
            coach = coach,
            user_profile = client,
            date = self.validated_data['date'],
            start_time = self.validated_data['start_time'],
            end_time = self.validated_data['end_time'],
            description = self.validated_data['description'],
            session_completed = self.validated_data['session_completed'],
            has_coach_accepted = self.validated_data['has_coach_accepted'],
            has_client_accepted = self.validated_data['has_client_accepted']
        )

        appointment.save()
        return appointment
