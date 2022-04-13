from django.urls import path

from users.apis import *


urlpatterns = [
    path('me/', UserMeApi.as_view(), name='me'),
    path('init/', UserInitApi.as_view(), name='init'),
    path('test/', testPOST.as_view(), name='test'),

]
