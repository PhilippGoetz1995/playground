from django.contrib import admin

from . import models

#Add the News Article to Admin Interface
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'description']

#Add the Cars Model to Admin Interface
class SimpleTestModelCarsAdmin(admin.ModelAdmin):
    list_display = ['id', 'company', 'type']

admin.site.register(models.NewsArticle, NewsArticleAdmin)
admin.site.register(models.simpleTestModelCars, SimpleTestModelCarsAdmin)