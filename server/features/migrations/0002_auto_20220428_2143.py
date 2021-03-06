# Generated by Django 3.1.7 on 2022-04-28 14:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('features', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_review', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='review',
            name='progress',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='review', to='features.progressions'),
        ),
        migrations.AddField(
            model_name='project',
            name='adviser',
            field=models.ManyToManyField(blank=True, default='', related_name='advice', to='users.Profile'),
        ),
        migrations.AddField(
            model_name='project',
            name='owner',
            field=models.ManyToManyField(blank=True, related_name='own', to='users.Profile'),
        ),
        migrations.AddField(
            model_name='progressions',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='post_progress', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='progressions',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='progress', to='features.project'),
        ),
        migrations.AddField(
            model_name='post',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='comment',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='features.post'),
        ),
    ]
