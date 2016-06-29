"""
WSGI config for mysite project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Park_web.settings")

application = get_wsgi_application()

from django.core.wsgi import get_wsgi_application
<<<<<<< HEAD:Park_web/wsgi.py
from whitenoise.django import DjangoWhiteNoise

application = get_wsgi_application()
application = DjangoWhiteNoise(application)
=======
#from whitenoise.django import DjangoWhiteNoise (I comment it to run on windows)

application = get_wsgi_application()
#application = DjangoWhiteNoise(application)  (I comment it to run on windows)
>>>>>>> f15ff4221db77b8919d387dc6d304c6d1e810213:Park_web/wsgi.py
