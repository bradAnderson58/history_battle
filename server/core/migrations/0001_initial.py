# Generated by Django 2.0.2 on 2018-02-06 01:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=45, unique=True)),
                ('password', models.CharField(max_length=45)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('role', models.CharField(choices=[('T', 'TEACHER'), ('S', 'STUDENT')], max_length=1)),
            ],
        ),
    ]
