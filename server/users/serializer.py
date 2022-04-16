

from rest_framework import serializers
from users.models import *

class ProflieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'
