
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from .models import Profile , User

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    first_name = instance.first_name
    last_name = instance.last_name

    if created:
        Profile.objects.create(email=instance , first_name = first_name , last_name = last_name)
