
from users.models import User , Todo,Profile


def user_get_me(user: User):
    profile = Profile.objects.get(email=user.email)
    return {
        'id': user.email ,
        'first_name': profile.first_name, 
        'last_name': profile.last_name,
        'status': profile.status,
        'email': profile.email.email,
        'avatar': profile.avatar, 
        'faculty': profile.faculty
    }

def profile_get_me(profile: Profile):
    
    return {
        'id': profile.email ,
        'first_name': profile.first_name, 
        'last_name': profile.last_name,
        'email': profile.email,
        'avatar': profile.avatar,
        'status': profile.status,
        'faculty': profile.faculty
    }

"""
def proflie_get_me(proflie: Profile):
    return{
        'name':proflie.first_name,
        'email': proflie.email
        
    }
"""
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
