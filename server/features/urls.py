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
]
