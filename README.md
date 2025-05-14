<!-- Credit to https://www.readme-templates.com/#key-features -->

<h1 align="center">
  <br>
  <a href="https://p-goetz.de/"><img src="https://p-goetz.de/wp-content/uploads/2025/04/20250404_P-Goetz_DEV_logo.png" alt="P-Goetz" width="200"></a>
</h1>

<h4 align="center">📦 P-Goetz Playgtound Application</h4>

<p align="center">
  <a href="https://p-goetz.de/"><img src="https://img.shields.io/badge/Version-0.0.1-blue"></a>
  <a href="https://p-goetz.de/"><img src="https://img.shields.io/badge/Author-Philipp_Goetz-yellow"></a>
  <a href="https://p-goetz.de/"><img src="https://img.shields.io/badge/uptime-100%25-brightgreen"></a>

</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#hints-to-not-cry-everytime">Hints</a>
</p>

<!-- Screenshot is optional -->
<!-- ![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif) -->

This is a Playground Application 

## 🏗️ Architecture
# Frontend => React
- **Technology**: React.js
- **Styling**: bootstrap
# Backend => Django
## STAGE -> using the build in django server
## PROD -> using the gunicorn server
# Webserver => nginx
## STAGE -> is connnected with build in django server
## PROD -> is connected to gunicorn server


### Technical Flow
1. Frontend build process compiles React application
2. Static files are served by Nginx


## 🚀 Key Features

Playground Application with:
1. 
- ✅ REACT Playground
- 🔜 Coming Soon: for now nothing on the Roadmap

## 🔧 How To Use

1. Application is dockerized => Start Docker (Desktop)
2. There is a STAGE and PROD env

Start the STAGE Containers
docker-compose -f docker-compose-stage.yml up

Start the PROD Containers
docker-compose -f docker-compose-prod.yml up


## 🔧 Development

- Editing python => use virtual env (venv)



## 🤬 Hints to not cry everytime

- ...


TODO README
- Extended the django backend structure with a "settings" folder with base, development and production settings


Nginx Handles:
/ → React frontend

/admin/ → Django backend (via proxy)

/staticfiles/ → Django static assets

