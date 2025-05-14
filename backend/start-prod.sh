#!/bin/sh

# Run migrations
python manage.py migrate

# Create superuser if not already existing
python manage.py createsu

# Collect static files
python manage.py collectstatic --noinput

# Start gunicorn without debug
# exec gunicorn --bind 0.0.0.0:8000 backend.wsgi:application 

# Start gunicorn with debug
exec gunicorn --bind 0.0.0.0:8000 backend.wsgi:application --log-level debug --access-logfile -