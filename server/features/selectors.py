from features.models import Post

def respone_post(post: Post):
    return {
        'title': post.title,
        'body': post.body,
        'owner': post.owner.email
    }