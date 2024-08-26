from __future__ import unicode_literals

from django.db import models
from django.utils import timezone


# Create your models here.
class Task(models.Model):
    created_at = models.DateField(default=timezone.now, blank=True)
    text = models.TextField()
    done = models.BooleanField(default=False, blank=True)

    def __unicode__(self):
        return self.text
