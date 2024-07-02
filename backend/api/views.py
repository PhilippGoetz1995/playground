from django.shortcuts import render


from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import json

from .models import NewsArticle
from .serializers import NewsArticleSerializer

@api_view(['GET'])
def news_list_view(request):
    if request.method == 'GET':
        # Get all objects from database and save it in queryset
        queryset = NewsArticle.objects.all()

        #Serialier take queryset and transform it from a queryset into a python object that can be read => Data is in .data
        serializedData = NewsArticleSerializer(queryset, many=True)

        #Via JsonResponse the data can be exposed in JSON Format
        return JsonResponse(serializedData.data, safe=False)
    

@api_view(['POST'])
def add_news_article_view(request):
    if request.method == 'POST':
        serializer = NewsArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Save the valid data to the database
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_view(request):
    if request.method == 'POST':
        if request.content_type != 'application/json':
            return JsonResponse({'error': 'Unsupported media type'}, status=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE)
        
        try:
            body = json.loads(request.body)
            username = body.get('username')
            password = body.get('password')
            user = authenticate(request, username=username, password=password)
            
            print(user)

            if user is not None:
                login(request, user)
                # return token or other data
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except json.JSONDecodeError:
            return Response({'error': 'Invalid JSON'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def logout_view(request):

    print("Session data before logout:", request.session.items())

    logout(request)

   # Check session data after logout
    print("Session data after logout:", request.session.items())

    return Response({'message': 'Logged out'}, status=status.HTTP_200_OK)

@api_view(['GET'])
def user_status_view(request):
    if request.user.is_authenticated:
        return Response({'logged_in': True}, status=status.HTTP_200_OK)
        
    else:
        return Response({'logged_in': False}, status=status.HTTP_200_OK)
        #return Response('test2', status=status.HTTP_200_OK)