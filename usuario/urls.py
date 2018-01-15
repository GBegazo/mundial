from django.urls import path, include
from usuario.views import RegistroUsuario
from pages.views import login

app_name = 'usuario'

urlpatterns = [
    path('registrar', RegistroUsuario.as_view() , name = "registrar"),
]
