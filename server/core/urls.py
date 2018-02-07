
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from core import views

urlpatterns = [
    path('users/', views.UserList.as_view(), name='all users'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user detail'),
    path('quizzes/', views.QuizList.as_view(), name='all quizzes'),
    path('quizzes/<int:pk>', views.QuizDetail.as_view(), name='quiz crud')
]

urlpatterns = format_suffix_patterns(urlpatterns)



"""
path('', views.index, name='index'),
    path('specifics/<int:question_id>/', views.detail, name='detail'),
    path('<int:question_id>/results/', views.results, name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
"""