import email
from logging.handlers import SYSLOG_UDP_PORT
from django.shortcuts import render
from requests import request
from rest_framework import generics , serializers
from features import serializer 
from features.services import *
from features.selectors import *
from rest_framework import permissions
from features.permission import IsOwnerOrReadOnly
from api.mixins import ApiAuthMixin , ApiErrorsMixin
from rest_framework.views import APIView
from users.models import *
from users.selectors import *
from rest_framework.response import Response
# Create your views here.

from .models import *
    
class PostList(ApiAuthMixin,generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = serializer.PostSerializer

    def perform_create(self, serializer):
        print(self.request.user)
        serializer.save(owner=self.request.user)

class PostDetail(ApiAuthMixin,generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = serializer.PostSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                        #IsOwnerOrReadOnly]

class getFormDetailFrontend(ApiAuthMixin, ApiErrorsMixin, APIView):
    class InputSerializer(serializers.Serializer):
        title = serializers.CharField(required=False, default='')
        body = serializers.CharField(required=False, default='')
    
    def post(self, request, *args, **kwargs):
        serializer = self.InputSerializer(data=request.data)
        print("this is data")
        print(request.data)
        serializer.is_valid(raise_exception=True)

        owner = request.user
        title = serializer.validated_data.get("title")
        body = serializer.validated_data.get("body")
        
        post = create_post(owner , title , body)

        response = Response(data=respone_post(post=post))
    
        return response


class CommentList(ApiAuthMixin,generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializer.CommentSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CommentDetail(ApiAuthMixin,generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializer.CommentSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                         # IsOwnerOrReadOnly]

class DeletePost(ApiAuthMixin,generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer
    
    def perform_create(self, serializer):
        print(self.request.user)
        serializer.delete(owner=self.request.user)


