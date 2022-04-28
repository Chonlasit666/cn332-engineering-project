from logging.handlers import SYSLOG_UDP_PORT
from django.shortcuts import render
from requests import request
from rest_framework import generics, serializers
from features import serializer
from features.services import *
from features.selectors import *
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
    serializer_class = serializer.PostSerializer

    def perform_create(self, serializer):
        print(self.request.user)
        serializer.save(owner=self.request.user)


class PostDetail(ApiAuthMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = serializer.PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    def perform_delete(self, serializer):
        if(serializer.owner == self.request.user):
            serializer.delete()


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

        post = create_post(owner, title, body)

        response = Response(data=respone_post(post=post))

        return response


class CommentList(ApiAuthMixin, generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializer.CommentSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentDetail(ApiAuthMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializer.CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    def perform_delete(self, serializer):
        if(serializer.owner == self.request.user):
            serializer.delete()


class CreateProject(ApiAuthMixin, generics.ListCreateAPIView):

    queryset = Project.objects.all()
    serializer_class = serializer.ProjectSerializer

    def perform_create(self, serializer):
        serializer.save()


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = serializer.ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    def perform_delete(self, serializer):
        if(serializer.owner == self.request.user):
            serializer.delete()


class Progress(ApiAuthMixin, generics.ListCreateAPIView):
    print("in prog")
    queryset = Progressions.objects.all()
    serializer_class = serializer.ProgressSerializer

    def perform_create(self, serializer):
        print("create prog")
        serializer.save()


class ProgressUpdate(ApiAuthMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Progressions.objects.all()
    serializer_class = serializer.ProgressSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    def perform_delete(self, serializer):
        if(serializer.owner == self.request.user):
            serializer.delete()


class ReviewList(ApiAuthMixin, generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = serializer.ReviewSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save()


class ReviewUpdate(ApiAuthMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = serializer.ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    def perform_delete(self, serializer):
        if(serializer.owner == self.request.user):
            serializer.delete()
