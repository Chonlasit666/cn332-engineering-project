from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.management.utils import get_random_secret_key


class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True, db_index=True,  primary_key=True)
    secret_key = models.CharField(max_length=255, default=get_random_secret_key)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        swappable = 'AUTH_USER_MODEL'

    @property
    def name(self):

        if not self.last_name:
            return self.first_name.capitalize()

        return f'{self.first_name.capitalize()} {self.last_name.capitalize()}'


class Profile(models.Model):
    DEAFAULTPIC="https://firebasestorage.googleapis.com/v0/b/top-cubist-344010.appspot.com/o/files%2Ficon-students-3.jpg?alt=media&token=69e9185d-846d-429b-a078-e21c51cc21ae%22"
    status_choices = (
        ('S', 'Student'),
        ('P', 'Professor')
    )
    first_name = models.CharField(max_length=200, null=True, blank=True)
    last_name = models.CharField(max_length=200, null=True, blank=True)
    email = models.OneToOneField(User, unique=True, on_delete=models.CASCADE)
    # avatar = models.ImageField(upload_to='profile', blank = True) this
    avatar = models.CharField(max_length=200, null=True, blank=True, default=DEAFAULTPIC)
    status = models.CharField(
        max_length=9, choices=status_choices)  # Student / Professor
    faculty = models.CharField(max_length=200, blank=True, null=False)

    def __str__(self):
        return self.email.email


class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
