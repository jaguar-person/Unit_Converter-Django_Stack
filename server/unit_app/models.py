from django.db import models

# Create your models here.


class UnitCategory(models.Model):
    category = models.TextField()
    standard = models.TextField()


class Unit(models.Model):
    name = models.TextField()
    unit_category = models.ForeignKey(
        UnitCategory, on_delete=models.CASCADE, default=1)
    affix = models.FloatField(default=1.0)

    def __str__(self):
        return self.name
