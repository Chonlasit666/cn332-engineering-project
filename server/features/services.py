from django.db import transaction

from utils import get_now

from features.models import Post, Comment


@transaction.atomic
def create_post(owner, title, body, tags):
    print("atomatic owner", type(owner))
    post = Post.objects.create(title=title, body=body, owner=owner)
    print(tags)
    for i in tags:
        post.tags.add(i)
    return post


@transaction.atomic
def create_comment(owner, body, post):

    comment = Comment.objects.create(body=body, owner=owner, post=post)
    print("atomatic", comment)
    return comment
