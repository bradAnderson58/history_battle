from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class Quiz(models.Model):

    owner = models.ForeignKey('auth.User', related_name='quizzes', on_delete=models.CASCADE)
    name = models.CharField(max_length=45, null=True)
    num_books = models.IntegerField()
    score = models.IntegerField(null=True)
    # curriculum will be another foreign key

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

# TODO: associate this stuff to the existing auth.User table
"""
class User(models.Model):
    # according to django docs this is how 'enum'
    TEACHER = 'T'
    STUDENT = 'S'
    ROLE_CHOICES = ((TEACHER, 'TEACHER'), (STUDENT, 'STUDENT'))

    # default null is false
    user_name = models.CharField(max_length=45, unique=True)
    password = models.CharField(max_length=45)
    email = models.EmailField(null=True)
    role = models.CharField(max_length=1, choices=ROLE_CHOICES)
    # supervisor this is a foreign key
    """