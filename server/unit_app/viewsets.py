from rest_framework import viewsets
from unit_app.models import Unit
from unit_app.serializer import UnitSerializer
from unit_app.models import UnitType
from unit_app.serializer import UnitTypeSerializer


class UnitViewSet(viewsets.ModelViewSet):
    serializer_class = UnitSerializer

    def get_queryset(self):
        return Unit.objects.all()


class UnitTypeViewSet(viewsets.ModelViewSet):
    serializer_class = UnitTypeSerializer

    def get_queryset(self):
        return UnitType.objects.all()
