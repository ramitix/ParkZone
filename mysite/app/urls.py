
from django.conf.urls import url
from .import views
from django.core.urlresolvers import reverse

app_name = 'Park_app'
urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    
]
