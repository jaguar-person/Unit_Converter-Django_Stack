from rest_framework import viewsets
from unit_app.models import Unit, UnitCategory
from unit_app.serializer import UnitSerializer, UnitCategorySerializer

class UnitViewSet(viewsets.ModelViewSet):
    serializer_class = UnitSerializer

    def get_queryset(self):
        return Unit.objects.all()


class UnitCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = UnitCategorySerializer

    def get_queryset(self):
        return UnitCategory.objects.all()
