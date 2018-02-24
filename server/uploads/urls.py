
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from uploads import views

urlpatterns = [
    path('upload/', views.FileUploadView.as_view(), name='upload a file'),
    path('keen/<int:pk>', views.KeenDataView.as_view(), name='get data from file')
];

urlpatterns = format_suffix_patterns(urlpatterns)