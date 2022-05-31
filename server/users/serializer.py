

from rest_framework import serializers
from users.models import *
from features.models import *


class ProflieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'


class ProflieViewSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField(source='id')

    class Meta:
        model = Profile
        fields = '__all__'


class ProflieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'
