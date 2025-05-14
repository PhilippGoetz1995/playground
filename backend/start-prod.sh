#!/bin/sh

# Run migrations
python manage.py migrate

# # Create superuser if it doesn't exist
# python manage.py shell << END
# from django.contrib.auth import get_user_model
# import os
# User = get_user_model()
# if not User.objects.filter(username=os.environ.get('DJANGO_SUPERUSER_USERNAME')).exists():
#     User.objects.create_superuser(
#         username=os.environ.get('DJANGO_SUPERUSER_USERNAME'),
#         email=os.environ.get('DJANGO_SUPERUSER_EMAIL'),
#         password=os.environ.get('DJANGO_SUPERUSER_PASSWORD')
#     )
#     print('Superuser created successfully')
# else:
#     print('Superuser already exists')
# END

# Collect static files
python manage.py collectstatic --noinput

# Start gunicorn without debug
# exec gunicorn --bind 0.0.0.0:8000 backend.wsgi:application 

# Start gunicorn with debug
exec gunicorn --bind 0.0.0.0:8000 backend.wsgi:application --log-level debug --access-logfile -