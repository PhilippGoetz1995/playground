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
# exec gunicorn --bind 0.0.0.0:8000 backend.wsgi:application --log-level debug --access-logfile -

# Start gunicorn with proper configuration
exec gunicorn \
    --bind 0.0.0.0:8000 \
    --workers 3 \
    --worker-class sync \
    --timeout 120 \
    --keep-alive 2 \
    --max-requests 1000 \
    --max-requests-jitter 100 \
    --log-level info \
    --access-logfile - \
    --error-logfile - \
    backend.wsgi:application