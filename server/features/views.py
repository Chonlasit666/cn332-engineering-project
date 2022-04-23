import email
from django.shortcuts import render
from requests import request
from rest_framework import generics
from features import serializers 
from rest_framework import permissions
from features.permission import IsOwnerOrReadOnly
from api.mixins import ApiAuthMixin
from rest_framework.views import APIView
from users.models import *
from users.selectors import *
from rest_framework.response import Response
# Create your views here.

from .models import *
    
class PostList(ApiAuthMixin,generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer

    def perform_create(self, serializer):
        print(self.request.user)
        serializer.save(owner=self.request.user)

class PostDetail(ApiAuthMixin,generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                        #IsOwnerOrReadOnly]


class CommentList(ApiAuthMixin,generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CommentDetail(ApiAuthMixin,generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                         # IsOwnerOrReadOnly]

class DeletePost(ApiAuthMixin,generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer
    
    def perform_create(self, serializer):
        print(self.request.user)
        serializer.delete(owner=self.request.user)


