from django.contrib import admin
from .models import *


class projectAdmin(admin.ModelAdmin):
    filter_horizontal = ('owner', 'adviser',)


admin.site.register(Post)
admin.site.register(Category)
admin.site.register(Project, projectAdmin)
