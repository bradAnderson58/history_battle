from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework import status
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile

class FileUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, format=None):
        print(request.data)
        file_obj = request.data['fileKey']
        print(file_obj.name)
        path = default_storage.save('data_files/' + file_obj.name, ContentFile(file_obj.read())) # TODO: write in chunks for large data sets
        return Response(status=status.HTTP_204_NO_CONTENT)
