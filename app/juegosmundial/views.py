from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index_juegosmundial(request):
	return HttpResponse("<h1>Soy la pagina principal de la pagina adopción</h1>")

def juegosmundialbien(request):
	return render(request, 'usuario/bienvenido.html')
def triviadescrip(request):
	return render(request, 'juegos/DescripTrivia.html')	

def equipoidealdescrip(request):
	return render(request, 'juegos/DescripEquipoIdeal.html')	

def polladescrip(request):
	return render(request, 'juegos/DescripPolla.html')


def triviajuegos(request):
	return render(request, 'juegos/TriviaJuego.html')