from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework import status
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from uploads.csvValidator import CsvValidator

class FileUploadView(APIView):
    parser_class = (FileUploadParser,)
    csvValidator = CsvValidator()  # TODO: dependency injection in python?

    def post(self, request, format=None):
        file_obj = request.data['fileKey']

        # validate csv file
        if self.csvValidator.invalidUpload(file_obj.file):
            return Response(status=status.HTTP_406_NOT_ACCEPTABLE)

        file_obj.file.seek(0)
        path = default_storage.save('data_files/' + file_obj.name, ContentFile(file_obj.read())) # TODO: write in chunks for large data sets / compress / timestamp
        return Response(status=status.HTTP_204_NO_CONTENT)
