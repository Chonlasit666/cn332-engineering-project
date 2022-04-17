import email
from django.shortcuts import render
from requests import request
from rest_framework import generics
from features import serializers 
from rest_framework import permissions
from features.permission import IsOwnerOrReadOnly
from api.mixins import ApiAuthMixin, ApiErrorsMixin
from rest_framework.views import APIView
from users.models import *
from users.selectors import *
from rest_framework.response import Response
# Create your views here.

from .models import *
    
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer

    def perform_create(self, serializer):
        test = User.objects.get(email="jirat.suk@dome.tu.ac.th")
        print(self.request.user)
        serializer.save(owner=self.request.user)

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                        #IsOwnerOrReadOnly]


class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                         # IsOwnerOrReadOnly]


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = serializers.CategorySerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = serializers.PostSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          #IsOwnerOrReadOnly]