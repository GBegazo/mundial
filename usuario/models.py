from django.db import models

class Login(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=30)
    timestamp = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.email
