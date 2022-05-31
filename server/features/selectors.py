from features.models import Post, Comment


def respone_post(post: Post):
    return {
        'title': post.title,
        'body': post.body,
        'owner': post.owner.email
    }


def respone_comment(comment: Comment):
    return {

        'body': comment.body,
        'owner': comment.owner.email,

    }
