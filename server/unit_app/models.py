from django.db import models

# Create your models here.


class UnitType(models.Model):
    title = models.TextField()
    standard = models.TextField()


class Unit(models.Model):
    name = models.TextField()
    unit_type = models.ForeignKey(
        UnitType, on_delete=models.CASCADE, default=1)
    affix = models.FloatField(default=1.0)

    def __str__(self):
        return self.name
