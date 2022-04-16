from django.db import models
from django.utils import timezone

# Create your models here.

class Post(models.Model):
    title = models.TextField()
    content = models.TextField()
    status = models.BooleanField(default=True)
    author = models.ForeignKey('users.User', on_delete=models.CASCADE)
    created_on = models.DateTimeField(default=timezone.now)


