from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers

from app.juegosmundial.models import Pregunta,Respuesta,Jugadores

from app.juegosmundial.forms import EquipoForm
# Create your views here.


def index_juegosmundial(request):
	return HttpResponse("<h1>Soy la pagina principal</h1>")

def juegosmundialbien(request):
	return render(request, 'usuario/bienvenido.html')

def triviadescrip(request):
	return render(request, 'juegos/trivia/DescripTrivia.html')	

def equipoidealdescrip(request):
	return render(request, 'juegos/DescripEquipoIdeal.html')	

def polladescrip(request):
	return render(request, 'juegos/DescripPolla.html')


def triviajuegos(request):
	return render(request, 'juegos/trivia/TriviaJuego.html')

def triviafinal(request):
	return render(request, 'juegos/trivia/FinJuegoTrivia.html')

def preguntas_list(request):
	pregunta = Pregunta.objects.all()
	respuesta = Respuesta.objects.all()
	#contexto = {'preguntas':pregunta, 'respuestas':respuesta}
	contexto = {'respuestas':respuesta}
	return render(request, 'juegos/TriviaJuego.html', contexto)

def listado(request):
	pregunta = Pregunta.objects.all()
	respuesta = Respuesta.objects.all()

	contexto = {'preguntas':pregunta,'respuestas':respuesta}
	print(contexto)
	lista = serializers.serialize('json', pregunta)
	lista2 = serializers.serialize('json', respuesta)
	
	#return HttpResponse('{'+lista+','+lista2+'}', content_type='application/json')
	return HttpResponse('['+lista+','+lista2+']', content_type='application/json')

	#Agregando listadoJugadores

def listadojugadores(request):
	jugadores = Jugadores.objects.all()
	

	#contexto = {'jugadores':jugadores}
	#print(contexto)
	listajugadores = serializers.serialize('json', jugadores)
	
	
	#return HttpResponse('{'+lista+','+lista2+'}', content_type='application/json')
	return HttpResponse(listajugadores, content_type='application/json')	

def equipoidealjuegos(request):
	return render(request, 'juegos/EquipoIdealJuego.html')

def equipo_view(request):
	if request.method == 'POST':
		form = EquipoForm(request.POST)
		if form.is_valid():
			form.save()
		return redirect('juegosmundial:juegos_listar')
	else:
		form = EquipoForm()
	return render(request,'juegos/EquipoIdealJuego.html',{'form':form})