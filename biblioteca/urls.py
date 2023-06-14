from django.urls import path, include
from rest_framework import routers
from biblioteca import views

router=routers.DefaultRouter()
router.register(r'autores',views.AutorViewSet,'autor')
router.register(r'libros', views.LibroViewSet,'libro')
router.register(r'usuarios',views.UsuarioViewSet,'usuario')
router.register(r'prestamos', views.PrestamoViewSet,'prestamo')

urlpatterns=[ 
    path("api/v1/", include(router.urls)) 
]