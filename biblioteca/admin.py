from django.contrib import admin

# Register your models here.
from .models import *

@admin.register(Autor)
class Autor(admin.ModelAdmin):
    list_display=("idautor","nombre","nacionalidad")

@admin.register(Libro)
class Libro(admin.ModelAdmin):
    list_display=("idlibro","codigo","titulo","isbn","editorial","numpags","autor")

@admin.register(Usuario)
class Usuario(admin.ModelAdmin):
    list_display=("idusuario","numusuario","nif","nombre","direccion","telefono")

@admin.register(Prestamo)
class Prestamo(admin.ModelAdmin):
    list_display=("idprestamo","fecprestamo","fecdevolucion","libro","usuario")