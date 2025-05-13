#!/bin/sh

# Run migrations
python manage.py migrate

# Start gunicorn
# exec gunicorn --bind 0.0.0.0:8000 backend.wsgi:application 


exec gunicorn --bind 0.0.0.0:8000 backend.wsgi:application --log-level debug --access-logfile -