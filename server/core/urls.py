
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from core import views as local_views
from rest_framework.authtoken import views as rest_framework_views

urlpatterns = [
    # Session Logins
    path('login/', local_views.get_auth_token, name='login'),
    path('logout/', local_views.logout_user, name='logout'),
    path('auth/', local_views.login_form, name='login_form'),
    path('get_auth_token/', rest_framework_views.obtain_auth_token, name='get_auth_token'),


    path('users/', local_views.UserList.as_view(), name='all users'),
    path('users/<int:pk>', local_views.UserDetail.as_view(), name='user detail'),
    path('quizzes/', local_views.QuizList.as_view(), name='all quizzes'),
    path('quizzes/<int:pk>', local_views.QuizDetail.as_view(), name='quiz crud')
]

urlpatterns = format_suffix_patterns(urlpatterns)



"""
path('', views.index, name='index'),
    path('specifics/<int:question_id>/', views.detail, name='detail'),
    path('<int:question_id>/results/', views.results, name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
"""