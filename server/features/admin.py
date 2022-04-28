from django.contrib import admin
from .models import *


class projectAdmin(admin.ModelAdmin):
    filter_horizontal = ('owner', 'adviser',)

class showdateAdmin(admin.ModelAdmin):
    readonly_fields = ('created',)
class showtimeAdmin(admin.ModelAdmin):
    readonly_fields = ('timestamp',)


admin.site.register(Post,showdateAdmin)
admin.site.register(Comment,showdateAdmin)
admin.site.register(Progressions,showtimeAdmin)
admin.site.register(Review,showtimeAdmin)
admin.site.register(Project, projectAdmin)
