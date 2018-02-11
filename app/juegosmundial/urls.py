from django.urls import path
from django.conf.urls import url

from app.juegosmundial.views import index_juegosmundial,equipoidealjuegos,juegosmundialbien,triviadescrip,\
                            equipoidealdescrip,polladescrip,triviajuegos,preguntas_list,listado,triviafinal,listadojugadores,equipo_view

app_name = 'juegosmundial'

urlpatterns = [
    path('index/', index_juegosmundial),
    url(r'^juegosbien/', juegosmundialbien, name='juegos_listar'),
    url(r'^triviainfos/', triviadescrip, name='triviainfo'),
    url(r'^equipoideal/', equipoidealdescrip, name='equipoidealinfo'),
    url(r'^polla/',polladescrip , name='pollainfo'),
    url(r'^triviajuego/',triviajuegos, name='triviajuego'),
    #url(r'^triviajuego/',preguntas_list, name='triviajuego'),
    url(r'^triviafinal/',triviafinal, name='triviajuegofinal'),
    url(r'^listado/',listado, name='listado'),
    #agregando equipo idal 
    url(r'^equipoidealjugadores/',listadojugadores, name='listadojugadores'),
    url(r'^equipoidealjuego/',equipo_view, name='equipoidealjuego'),
    
]
