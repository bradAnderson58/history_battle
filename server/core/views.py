
from django.contrib.auth.models import User
from core.models import Quiz
from core.serializers import QuizSerializer, UserSerializer
from core.permissions import IsOwnerOrReadOnly
from rest_framework import generics, permissions

# List all users, or create a new user
class QuizList(generics.ListCreateAPIView):
    #print(self.user)
    #queryset = Quiz.objects.get(owner=request.user)
    serializer_class = QuizSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        print(self.request.user)
        return Quiz.objects.filter(owner=self.request.user)


# retrieve, update, or delete a user
class QuizDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer