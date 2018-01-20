from django.urls import path
from django.conf.urls import url

from app.juegosmundial.views import index_juegosmundial,juegosmundialbien

app_name = 'juegosmundial'

urlpatterns = [
    path('index/', index_juegosmundial),
    url(r'^juegosbien/', juegosmundialbien, name='juegos_listar'),
]
