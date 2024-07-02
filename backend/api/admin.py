from django.contrib import admin

from . import models

#Add the News Article to Admin Interface
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'description']

admin.site.register(models.NewsArticle, NewsArticleAdmin)