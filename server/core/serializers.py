
from rest_framework import serializers
from core.models import Quiz
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    quizzes = serializers.PrimaryKeyRelatedField(many=True, queryset=Quiz.objects.all())
    class Meta:
        model = User
        fields = ('id', 'username', 'quizzes')

class QuizSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Quiz
        fields = ('id', 'name', 'num_books', 'owner')