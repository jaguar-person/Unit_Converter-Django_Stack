from rest_framework import routers
from unit_app.viewsets import UnitViewSet, UnitTypeViewSet

router = routers.SimpleRouter()
router.register('unit', UnitViewSet, basename='unit')
router.register('unit_type', UnitTypeViewSet, basename='unit_type')