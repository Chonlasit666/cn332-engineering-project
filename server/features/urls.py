from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
#router.register(r'', )

urlpatterns = [
    path('features',include(router.urls)),
]
