# Generated by Django 5.0.6 on 2024-06-29 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='newsarticle',
            name='image',
            field=models.ImageField(default='path/to/default/image.jpg', upload_to='post_images'),
        ),
    ]
