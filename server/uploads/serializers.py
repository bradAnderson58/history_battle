
from rest_framework import serializers
from uploads.models import Upload

class UploadSerializer(serializers.ModelSerializer):
	class Meta:
		model = Upload
		fields = ('id', 'filename')