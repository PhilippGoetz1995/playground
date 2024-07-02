from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('newslist/', views.news_list_view),
    path('addnewsarticle/', views.add_news_article_view),
    path('login/', views.login_view),
    path('logout/', views.logout_view),
    path('userstatus/', views.user_status_view),
]
