from django.contrib import admin
from .models import *


class projectAdmin(admin.ModelAdmin):
    filter_horizontal = ('owner', 'adviser',)

    
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Progressions)
admin.site.register(Review)
admin.site.register(Project, projectAdmin)
