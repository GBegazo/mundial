from django.db import models

# Create your models here.

class Respuesta(models.Model):
	descripcion = models.TextField()

	def __str__(self):
		return '{}'.format(self.descripcion)
	
class Pregunta(models.Model):
	descripcion = models.TextField()
	respuestas = models.ManyToManyField(Respuesta)
	correcta = models.IntegerField()

	#def __str__(self):
	#	return '{}'.format(self.descripcion)

	def __str__(self):
		return '{} {} {}'.format(self.descripcion,self.descripcion.join(respuesta.descripcion for respuesta in self.respuestas.all()),self.correcta)