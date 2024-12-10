
from rest_framework import serializers
from api.models import NewsArticle, simpleTestModelCars

class NewsArticleSerializer(serializers.ModelSerializer):
    
    image = serializers.FileField(required=True)
    
    class Meta:
        model = NewsArticle
        fields = ['id','image', 'title', 'description']


# Serializers are there to standardize the data which is incoming or also outgoing via API Calls
class CarSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = simpleTestModelCars
        fields = ['id','company', 'type']