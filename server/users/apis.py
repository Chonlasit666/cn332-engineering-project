import email
from rest_framework import serializers , generics
from rest_framework.views import APIView
from rest_framework.response import Response


from api.mixins import ApiErrorsMixin, ApiAuthMixin, PublicApiMixin

from auth.services import jwt_login, google_validate_id_token

from users.services import update_profile, user_get_or_create, post_todos, update_todos
from users.selectors import *
from users.models import Profile , Todo
from users.serializer import *

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


class testPUT(ApiAuthMixin, ApiErrorsMixin, APIView):

    def get_queryset(self):
        cars = Profile.objects.all()
        return cars

    def get(self, request, *args, **kwargs):
        
        try:
            id = request.query_params["id"]
            if id != None:
                car = Profile.objects.get(id=2)
                serializer = ProflieSerializer(car)
        except:
            cars = self.get_queryset()
            serializer = ProflieSerializer(cars, many=True)

        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        #id = request.query_params["id"]
        profile = Profile.objects.get(email=request.user.email)
        print(profile)
        
        data = request.data

        profile.first_name = data["first_name"]
        profile.last_name = data["last_name"]
        profile.status = data["status"]
        profile.avatar= data["avatar"]
        profile.faculty = data["faculty"]
        
        profile.save()

        serializer = ProflieSerializer(profile)
        return Response(serializer.data)


"""
class UserMeApi(ApiAuthMixin, ApiErrorsMixin, APIView):
    def get(self, request, *args, **kwargs):
        profile = Profile.objects.get(email=request.user.email)
        print(profile.email)
        return Response(proflie_get_me(profile))
"""