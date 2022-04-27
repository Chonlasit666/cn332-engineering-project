from django.db import transaction

from utils import get_now

from features.models import Post

@transaction.atomic
def create_post(owner,title,body):
    post = Post.objects.create(title=title, body=body, owner=owner)

    return post

