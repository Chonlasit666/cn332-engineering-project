
from users.models import User, Todo


def user_get_me(user: User):
    return {
        'id': user.email,
        'name': user.name,
        'email': user.email
    }


def test_get():
    return{
        'obj1': "a",
        'obj2': "b"

    }


def test_todo(todo: Todo):
    return {
        'title': todo.title,
        'description': todo.description,
        'completed': todo.completed

    }


def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'me': user_get_me(user=user),
    }
