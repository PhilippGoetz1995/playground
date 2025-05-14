#!/bin/sh

# Run migrations
python manage.py migrate

# # Ensure staticfiles directory exists with proper permissions
# mkdir -p /app/staticfiles
# chmod -R 755 /app/staticfiles
# chown -R 101:101 /app/staticfiles  # 101 is the nginx user ID in the container

# # Debug: Show current directory and Python path
# echo "Current directory:"
# pwd
# echo "Python path:"
# python -c "import sys; print('\n'.join(sys.path))"

# # Collect static files with maximum verbosity
# echo "Collecting static files..."
# python manage.py collectstatic --noinput --verbosity 3

# # Set permissions again after collecting static files
# chmod -R 755 /app/staticfiles
# chown -R 101:101 /app/staticfiles

# # Debug: List contents of staticfiles directory and its subdirectories
# echo "Contents of staticfiles directory:"
# ls -la /app/staticfiles
# echo "Contents of staticfiles/admin directory:"
# ls -la /app/staticfiles/admin
# echo "Contents of staticfiles/admin/js directory:"
# ls -la /app/staticfiles/admin/js

# Start gunicorn
# exec gunicorn --bind 0.0.0.0:8000 backend.wsgi:application 

# Start Django development server instead of gunicorn
exec python manage.py runserver 0.0.0.0:8000
