from django.urls import path, include
from pages.views import login

app_name = 'pages'

urlpatterns = [
    path('', login),
]
