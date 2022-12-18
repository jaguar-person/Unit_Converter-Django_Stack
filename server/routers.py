from rest_framework import routers
from unit_app.viewsets import UnitViewSet, UnitCategoryViewSet

router = routers.SimpleRouter()
router.register('unit', UnitViewSet, basename='unit')
router.register('unit_category', UnitCategoryViewSet, basename='unit_category')