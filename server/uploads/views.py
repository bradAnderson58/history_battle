from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework import status
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from uploads.csvValidator import CsvValidator
import datetime
import gzip
from uploads.models import Upload

class FileUploadView(APIView):
    parser_class = (FileUploadParser,)
    csvValidator = CsvValidator()  # TODO: dependency injection in python?

    def post(self, request, format=None):
        file_obj = request.data['fileKey']

        # validate csv file
        if self.csvValidator.invalidUpload(file_obj.file):
            return Response(status=status.HTTP_406_NOT_ACCEPTABLE)

        file_name = self.__formatFileName(file_obj.name)
        file_obj.file.seek(0)
        with gzip.GzipFile('data_files/' + file_name, 'w') as file_out:
            file_out.write(file_obj.read())

        data_set = Upload.objects.create(filename=file_name)
        print(data_set.id)
        return Response(data_set.id, status=status.HTTP_204_NO_CONTENT)

    def __formatFileName(self, filename):
        formattedName = filename.replace('.csv', '_', 1).replace(' ', '_')
        return formattedName + str(datetime.datetime.now()) + '.gz'