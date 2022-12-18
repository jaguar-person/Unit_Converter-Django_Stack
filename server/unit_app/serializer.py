from rest_framework import serializers
from unit_app.models import Unit, UnitCategory


class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = ['id', 'name', 'unit_category', 'affix']


class UnitCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = UnitCategory
        fields = ['id', 'category', 'standard']
