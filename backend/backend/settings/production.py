# Import base configuration
from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['*']

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost",
    "http://127.0.0.1:3000",
    "http://3.68.42.228",
]


