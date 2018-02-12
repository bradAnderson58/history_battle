from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework import status
from rest_framework.response import Response

class FileUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, format=None):
        print(request.data)
        file_obj = request.data['fileKey']
        print(file_obj)
        return Response(status=status.HTTP_204_NO_CONTENT)
