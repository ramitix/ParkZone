from django.shortcuts import render, get_object_or_404, get_list_or_404, render_to_response
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import loader
from django.core.urlresolvers import reverse
from django.http import JsonResponse
from django.contrib import messages
from datetime import *
#import requests
from .models import *
import urllib2


def index(request):
	parkZones = ParkInfo.objects.all()

	return render(request, 'Park_app/index.html', {'parkZones' : parkZones})