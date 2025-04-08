from rest_framework import serializers
from .models import Company

class CompanySimpleSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    city = serializers.CharField()
