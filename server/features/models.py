from django.db import models
from django.utils import timezone
from users.models import Profile
# Create your models here.


class Post(models.Model):
    created = models.DateTimeField(default=timezone.now)
    title = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField(blank=True, default='')
    owner = models.ForeignKey('users.User', related_name='posts', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.title


class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=False)
    owner = models.ForeignKey('users.User', related_name='comments', on_delete=models.CASCADE)
    post = models.ForeignKey('Post', related_name='comments', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']


class Project(models.Model):
    title = models.CharField(max_length=200)
    owner = models.ManyToManyField(Profile, related_name='own',blank=True)
    adviser = models.ManyToManyField(Profile, related_name='advice',default='',blank=True)
    status = models.BooleanField(default=True)
    Facility = models.CharField(max_length=200,blank=True,null=True)
    File_url = models.CharField(max_length=200,blank=True,null=True)
    Detail = models.TextField(blank=True,null=True)

    def __str__(self):
        return self.title


class Progressions(models.Model):
    owner = models.ForeignKey('users.User', related_name='post_progress', on_delete=models.CASCADE)
    project = models.ForeignKey('Project', related_name='progress', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    timestamp = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.project.title + self.title


class Review(models.Model):
    status_choices = (
        ('A', 'Approved'),
        ('R', 'Rejected'),
        ('Unknown', 'Unknown')
    )
    owner = models.ForeignKey('users.User', related_name='project_review', on_delete=models.CASCADE)
    progress = models.ForeignKey('Progressions', related_name='review', on_delete=models.CASCADE)
    status = models.CharField(
        max_length=8, choices=status_choices, default='Unknown')
    comments = models.TextField(blank=True)
    timestamp = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.progress.project.title + " | " + self.progress.title + " | " + self.status




