from django.db import models
from django.utils import timezone
from users.models import Profile
# Create your models here.

class Post(models.Model):
    title = models.TextField()
    content = models.TextField()
    status = models.BooleanField(default=True)
    author = models.ForeignKey('users.User', on_delete=models.CASCADE)
    created_on = models.DateTimeField(default=timezone.now)

class Project(models.Model):
    name = models.CharField(max_length=200)
    owner = models.ManyToManyField(Profile, related_name='own')
    adviser = models.ManyToManyField(Profile, related_name='advice')
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.name
