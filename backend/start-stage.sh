#!/bin/sh

# Run migrations
python manage.py migrate

# Create superuser if not already existing
python manage.py createsu

# Start Django development server instead of gunicorn
exec python manage.py runserver 0.0.0.0:8000
