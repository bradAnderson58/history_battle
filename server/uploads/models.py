from django.db import models


class Upload(models.Model):
    filename = models.CharField(max_length=255)