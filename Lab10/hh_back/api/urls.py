from django.urls import path
from .views import *
from . import fbv_views

urlpatterns = [
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:pk>/vacancies/', VacancyListByCompanyView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
    path('fbv/companies/', fbv_views.company_list, name='fbv-company-list'),
    path('fbv/companies/<int:pk>/vacancies/', fbv_views.company_vacancies, name='fbv-company-vacancies'),
]
