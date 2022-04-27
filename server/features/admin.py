from django.contrib import admin
from .models import *


class projectAdmin(admin.ModelAdmin):
    filter_horizontal = ('owner', 'adviser',)
class showdateAdmin(admin.ModelAdmin):
    readonly_fields = ('created',)

admin.site.register(Post,showdateAdmin)
admin.site.register(Comment,showdateAdmin)
admin.site.register(Project, projectAdmin)
