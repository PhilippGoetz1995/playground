import os
from django.db import models
from datetime import datetime

def rename_file(instance, filename):

    #Get the latest id but check first if maybe first entry

    if NewsArticle.objects.exists() :
        latest_article = NewsArticle.objects.latest('id')
        latest_id = latest_article.id
    else:
        latest_id = 1

    # Extract the file extension
    ext = filename.split('.')[-1]

    # Define the new filename => f" tell python to extraxt everyting
    new_filename = f"{latest_id+1}.{ext}"

    # Return the new file path
    return os.path.join('', new_filename)

class NewsArticle(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)

    #Defining also a default image for exisitng entries => TODO fix image url
    image = models.ImageField(upload_to=rename_file, default='path/to/default/image.jpg')

    def __str__(self):
        return self.title
