
from django.contrib.auth.models import User
from core.models import Quiz
from core.serializers import QuizSerializer, UserSerializer
from core.permissions import IsOwnerOrReadOnly
from rest_framework import generics, permissions
from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from rest_framework.authtoken.models import Token

# List all users, or create a new user
class QuizList(generics.ListCreateAPIView):
    #print(self.user)
    #queryset = Quiz.objects.get(owner=request.user)
    serializer_class = QuizSerializer
   # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        print(self.request.user)
        return Quiz.objects.filter(owner=self.request.user)


# retrieve, update, or delete a user
class QuizDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
 #   permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# authentication stuffs
def logout_user(request):
    return render(request, 'accounts/logout.html', {})

def login_form(request):
    return render(request, 'accounts/login.html', {})

def get_auth_token(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        # the password verified for the user
        if user.is_active:
            token, created = Token.objects.get_or_create(user=user)
            request.session['auth'] = token.key
            return redirect('/polls/', request)
    return redirect(settings.LOGIN_URL, request)