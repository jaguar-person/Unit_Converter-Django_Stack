# Generated by Django 4.2.dev20221217074637 on 2022-12-18 13:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UnitCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.TextField()),
                ('standard', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Unit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('affix', models.FloatField(default=1.0)),
                ('unit_category', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='unit_app.unitcategory')),
            ],
        ),
    ]
