from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('income', views.income_list),
    path('income/<int:pk>', views.income_detail),
    path('savings', views.savings_list),
    path('savings/<int:pk>', views.savings_detail),
    path('expenses', views.expenses_list),
    path('expenses/<int:pk>', views.expenses_detail),
]
