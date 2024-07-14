# Use an official Python runtime as a parent image
FROM python:3

# Set the working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose port 8000
EXPOSE 8000

# Start Application with Test Server => now commented out because PROD Setup
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Start gunicorn and bind the application to the correct port => "backend.wsgi" is the starting point for the application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]