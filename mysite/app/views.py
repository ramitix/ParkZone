from django.shortcuts import render, get_object_or_404, get_list_or_404, render_to_respose
from django.http import httpResponse, http404, httpResponse
from django.tempelate import loader
from django.core.urlresolvers import reverse
from django.http import JasonResponse
from django.contrib import messages
from datetime import *
import requests
from .models import *
import urllib2


