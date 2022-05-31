from features.models import *
from rest_framework import serializers
from users.models import *
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)


class OptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ('id', 'email', 'avatar', 'first_name', 'last_name')


class CommentSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ('id', 'created', 'body', 'owner', 'post', 'profileDetail')

    def get_profile(self, obj):
        print("dadad")
        selected_options = Profile.objects.filter(
            email=obj.owner)
        print("test444444444444444444444444444444444444", OptionSerializer(selected_options, many=True).data)
        return OptionSerializer(selected_options, many=True).data


class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.email')
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    created = serializers.DateTimeField(required=False, read_only=True)
    options = serializers.SerializerMethodField()
    tags = TagListSerializerField()
    commentDetail = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'owner', 'comments', 'created', 'options', 'tags', "commentDetail"]

    def get_options(self, obj):

        selected_options = Profile.objects.filter(
            email=obj.owner)

        return OptionSerializer(selected_options, many=True).data

    def get_commentDetail(self, obj):

        selected_options = Comment.objects.filter(
            post=obj)

        return CommentSerializer(selected_options, many=True).data


class GetPostTagsSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'owner', 'comments', 'created', 'tags']


class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.email')

    class Meta:
        model = Comment
        fields = ['id', 'body', 'owner', 'post', 'created']


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'status', 'owner', 'adviser', 'Facility', 'File_url', 'Detail', 'progress']


class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progressions
        fields = ['id', 'title', 'owner', 'project', 'description', 'timestamp', 'review']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['progress', 'owner', 'status', 'comments', 'timestamp']


class ProjectOwnerAllSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ['id', 'title', 'status', 'owner', 'adviser', 'Facility', 'File_url', 'Detail', 'progress']
