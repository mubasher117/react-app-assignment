import json

from django.http import HttpResponse
from rest_framework import viewsets

from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    search_fields = ('text', 'done')
    filter_fields = ('priority', 'deadline', 'done')

    def myview(_request):
        response = HttpResponse(json.dumps({"key": "value", "key2": "value"}))
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "*"
        return response
