from django.urls import path
from . import views
urlpatterns = [
    path('todos/', views.TodoView.as_view()),
    path('todos/<int:pk>/', views.DetailView.as_view()),
]