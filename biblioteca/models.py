from django.db import models

# Create your models here.

class Autor(models.Model):
    idautor = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    nacionalidad = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Libro(models.Model):
    idlibro = models.IntegerField(primary_key=True)
    codigo = models.IntegerField()
    titulo = models.CharField(max_length=100)
    isbn = models.CharField(max_length=30)
    editorial = models.CharField(max_length=60)
    numpags = models.PositiveSmallIntegerField()
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo

class Usuario(models.Model):
    idusuario = models.IntegerField(primary_key=True)
    numusuario = models.IntegerField()
    nif = models.CharField(max_length=20)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre

class Prestamo(models.Model):
    idprestamo = models.IntegerField(primary_key=True)
    fecprestamo = models.DateTimeField(auto_now_add=True)
    fecdevolucion = models.DateField(null=True)
    libro = models.CharField(max_length=255)
    usuario = models.CharField(max_length=255)