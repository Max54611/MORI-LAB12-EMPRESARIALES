from rest_framework import viewsets
from .serializer import *
from .models import *


class LibroViewSet(viewsets.ModelViewSet):
    serializer_class = LibroSerializer
    queryset=Libro.objects.all()

class AutorViewSet(viewsets.ModelViewSet):
    serializer_class = AutorSerializer
    queryset=Autor.objects.all()

class UsuarioViewSet(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset=Usuario.objects.all()

class PrestamoViewSet(viewsets.ModelViewSet):
    serializer_class = PrestamoSerializer
    queryset=Prestamo.objects.all()
                        
    
    
