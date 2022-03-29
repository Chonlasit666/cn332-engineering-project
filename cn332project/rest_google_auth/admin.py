from django.contrib import admin

from .models import Project, Profile


class projectAdmin(admin.ModelAdmin):
    filter_horizontal = ('owner', 'adviser',)


admin.site.register(Project, projectAdmin)
admin.site.register(Profile)
