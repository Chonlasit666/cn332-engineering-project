from django.urls import path, include
from rest_framework import routers
#test
from rest_framework.urlpatterns import format_suffix_patterns
from features import views
#

router = routers.DefaultRouter()
#router.register(r'', )

urlpatterns = [
    path('features',include(router.urls)),
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
    path('comments/', views.CommentList.as_view()),
    path('comments/<int:pk>/', views.CommentDetail.as_view()),
    path('create_post/', views.getFormDetailFrontend.as_view()),
    path('create_project/', views.CreateProject.as_view()),
    path('project/<int:pk>/', views.ProjectDetail.as_view()),
    path('progress/', views.Progress.as_view()),
    path('progress/<int:pk>/', views.ProgressUpdate.as_view()),
    path('reviews/', views.ReviewList.as_view()),
    path('reviews/<int:pk>/', views.ReviewUpdate.as_view()),
]
