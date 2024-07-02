
from rest_framework import serializers
from api.models import NewsArticle

class NewsArticleSerializer(serializers.ModelSerializer):
    
    image = serializers.FileField(required=True)
    
    class Meta:
        model = NewsArticle
        fields = ['id','image', 'title', 'description']