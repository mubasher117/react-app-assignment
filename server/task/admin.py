from django.contrib import admin

from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ('created_at', 'text', 'done')
    search_fields = ['text']


admin.site.register(Task, TaskAdmin)
