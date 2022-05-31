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
from taggit_serializer.serializers import (TagListSerializerField, TaggitSerializer)
from users.serializer import ProflieSerializer
from rest_framework import filters

# Create your views here.

from .models import *


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = serializer.PostSerializer

    def perform_create(self, serializer):
        print(self.request.user)
        serializer.save(owner=self.request.user)


class PostListTags(generics.ListAPIView):

    serializer_class = serializer.PostSerializer
    queryset = Post.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(tags__name=self.kwargs['tags'])


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
        tags = TaggitSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.InputSerializer(data=request.data)
        print("this is data")
        print(request.data)
        serializer.is_valid(raise_exception=True)

        owner = request.user
        title = serializer.validated_data.get("title")
        body = serializer.validated_data.get("body")
        tags = request.data['tags']
        print(type(tags), "-------------------------------------")
        post = create_post(owner, title, body, tags)

        response = Response(data=respone_post(post=post))

        return response


class CommentList(ApiAuthMixin, ApiErrorsMixin, APIView):
    class InputSerializer(serializers.Serializer):

        body = serializers.CharField(required=False, default='')

    def post(self, request, *args, **kwargs):
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        owner = request.user
        post = request.data["post"]
        print("#####", post)
        post = Post.objects.get(id=post)
        print("#####", post)
        body = serializer.validated_data.get("body")
        print("------------", owner, body, post)
        comment = create_comment(owner, body, post)
        print("***************")
        response = Response(data=respone_comment(comment=comment))

        return response


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
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

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


class getPostView(generics.ListCreateAPIView):
    serializer_class = serializer.PostSerializer
    queryset = Post.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(id=self.kwargs['id'])

    def perform_create(self, serializer):
        serializer.save()


class ProjectAdviserAll(ApiAuthMixin, generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = serializer.ProjectOwnerAllSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        profile_used = Profile.objects.get(email=self.request.user)

        # print("projectadviser",queryset.filter(adviser=2))

        return queryset.filter(adviser=profile_used)


class ProjectOwnerAll(ApiAuthMixin, generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = serializer.ProjectOwnerAllSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        profile_used = Profile.objects.get(email=self.request.user)

        # print("projectadviser",queryset.filter(adviser=2))

        return queryset.filter(owner=profile_used)


class ProfressorList(generics.ListAPIView):
    queryset = Profile.objects.filter(status='P')
    serializer_class = ProflieSerializer

class StudentList(generics.ListAPIView):
    queryset = Profile.objects.filter(status='S')
    serializer_class = ProflieSerializer


class PostListDetailfilter(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = serializer.PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$title']

    # $ regex search
    # start with search


class ProjectsListDetailfilter(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = serializer.ProjectSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$title']

    # $ regex search
    # start with search
