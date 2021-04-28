from rest_framework import serializers

from reviews.models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['coach', 'reviewer', 'rating', 'body', 'date']

    def save(self):
        review = Review(
            coach = self.validated_data['coach'],
            reviewer = self.validated_data['reviewer'],
            rating = self.validated_data['rating'],
            body = self.validated_data['body'],
        )

        review.save()
        return review