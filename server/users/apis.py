from rest_framework import serializers, generics
from rest_framework.views import APIView
from rest_framework.response import Response

from api.mixins import ApiErrorsMixin, ApiAuthMixin, PublicApiMixin

from auth.services import jwt_login, google_validate_id_token

from users.services import user_get_or_create, post_todos, update_todos
from users.selectors import *
from users.models import Profile, Todo


class UserMeApi(ApiAuthMixin, ApiErrorsMixin, APIView):
    def get(self, request, *args, **kwargs):
        return Response(user_get_me(user=request.user))


class testGet(ApiAuthMixin, ApiErrorsMixin, APIView):
    def get(self, request, *args, **kwargs):
        return Response(test_get())


class testPOST(ApiAuthMixin, ApiErrorsMixin, APIView):
    class InputSerializer(serializers.Serializer):
        title = serializers.CharField(required=False, default='')
        description = serializers.CharField(required=False, default='')
        completed = serializers.BooleanField(required=False, default='')

    def post(self, request, *args, **kwargs):
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # update todo list
        todo = post_todos(**serializer.validated_data)

        response = Response(data=test_todo(todo=todo))

        return response


class updateTodo(ApiAuthMixin, ApiErrorsMixin, APIView):
    class InputSerializer(serializers.Serializer):
        id = serializers.IntegerField(required=False, default='')
        title = serializers.CharField(required=False, default='')
        description = serializers.CharField(required=False, default='')
        completed = serializers.BooleanField(required=False, default='')

    def post(self, request, *args, **kwargs):
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # update todo list
        todo = update_todos(**serializer.validated_data)

        response = Response(data=test_todo(todo=todo))

        return response


class UserInitApi(PublicApiMixin, ApiErrorsMixin, APIView):
    class InputSerializer(serializers.Serializer):
        email = serializers.EmailField()
        first_name = serializers.CharField(required=False, default='')
        last_name = serializers.CharField(required=False, default='')

    def post(self, request, *args, **kwargs):
        id_token = request.headers.get('Authorization')
        google_validate_id_token(id_token=id_token)

        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # We use get-or-create logic here for the sake of the example.
        # We don't have a sign-up flow.
        user, _ = user_get_or_create(**serializer.validated_data)

        response = Response(data=user_get_me(user=user))
        response = jwt_login(response=response, user=user)

        return response
