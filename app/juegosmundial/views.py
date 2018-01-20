from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index_juegosmundial(request):
	return HttpResponse("<h1>Soy la pagina principal de la pagina adopción</h1>")

def juegosmundialbien(request):
	return render(request, 'usuario/bienvenido.html')

