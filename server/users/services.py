from typing import Tuple

from django.db import transaction
from django.core.management.utils import get_random_secret_key

from utils import get_now

from users.models import User, Todo, Profile


def user_create(email, password=None, **extra_fields) -> User:
    extra_fields = {
        'is_staff': False,
        'is_superuser': False,
        **extra_fields
    }

    user = User(email=email, **extra_fields)

    if password:
        user.set_password(password)
    else:
        user.set_unusable_password()

    user.full_clean()
    user.save()

    return user


def user_create_superuser(email, password=None, **extra_fields) -> User:
    extra_fields = {
        **extra_fields,
        'is_staff': True,
        'is_superuser': True
    }

    user = user_create(email=email, password=password, **extra_fields)

    return user


def user_record_login(*, user: User) -> User:
    user.last_login = get_now()
    user.save()

    return user


@transaction.atomic
def user_change_secret_key(*, user: User) -> User:
    user.secret_key = get_random_secret_key()
    user.full_clean()
    user.save()

    return user


@transaction.atomic
def user_get_or_create(*, email: str, **extra_data) -> Tuple[User, bool]:
    user = User.objects.filter(email=email).first()
    print(extra_data)

    if user:
        return user, False

    return user_create(email=email, **extra_data), True


@transaction.atomic
def post_todos(title: str,  description: str, completed: bool):
    todo = Todo.objects.create(title=title, description=description, completed=completed)

    return todo


@transaction.atomic
def update_todos(id: int, title: str,  description: str, completed: bool):
    todo = Todo.objects.get(id=id)
    todo.title = title
    todo.description = description
    todo.completed = completed
    todo.save()

    return todo

@transaction.atomic
def update_profile(first_name: str, last_name: str, email: str, avatar: str,):
    
    print("in update")
    print(first_name)
    print(last_name)
    print(email)
    print(avatar)
    user = User.objects.filter(email=email)
    print("this is user"+ user)
    profile = Profile.objects.get(email=user.email)
    print("this is profile" + profile)
    profile.first_name = first_name
    profile.last_name = last_name
    profile.email = email
    print("old avater" + profile.avatar)
    profile.avatar = avatar
    print("new avater" + profile.avatar)
    """ profile.faculty = faculty """

    profile.save()

    print("edit profile success")
    return profile
