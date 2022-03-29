from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    status_choices = (
        ('S', 'Student'),
        ('P', 'Professor')
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # avatar = models.ImageField(upload_to='profile', blank = True) this
    avatar = models.CharField(max_length=200, null=True, blank=True)
    status = models.CharField(
        max_length=9, choices=status_choices)  # Student / Professor
    faculty = models.CharField(max_length=200, blank=True, null=False)

    def __str__(self):
        return self.user.username


class Project(models.Model):
    name = models.CharField(max_length=200)
    owner = models.ManyToManyField(Profile, related_name='own')
    adviser = models.ManyToManyField(Profile, related_name='advice')
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.name
