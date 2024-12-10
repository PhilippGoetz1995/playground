from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('newslist/', views.news_list_view),
    path('addnewsarticle/', views.add_news_article_view),
    path('carlist/', views.car_list_view),
    path('resetcarlist/', views.reset_car_list_view),
    path('addnewcar/', views.add_new_car_view),
    path('login/', views.login_view),
    path('logout/', views.logout_view),
    path('userstatus/', views.user_status_view),

]
