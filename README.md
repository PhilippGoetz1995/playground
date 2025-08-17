<h1 align="center">
  <br>
  <a href="https://p-goetz.de/"><img src="https://p-goetz.de/wp-content/uploads/2025/04/20250404_P-Goetz_DEV_logo.png" alt="P-Goetz" width="200"></a>
</h1>

<h4 align="center">📦 P-Goetz Playgtound Application</h4>

<p align="center">
  <a href="https://p-goetz.de/"><img src="https://img.shields.io/badge/Version-1.0.1-blue"></a>
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

---

This is a Playground Application

---

# 🏗️ Architecture

## Frontend => React

- **Technology**: React.js
- **Styling**: bootstrap

## Backend => Django

- STAGE -> using the build in django server
- PROD -> using the gunicorn server

## Webserver => nginx

- STAGE -> is connnected with build in django server
- PROD -> is connected to gunicorn server

## Technical Flow

1. Frontend build process compiles React application
2. Static files are served by Nginx

<br>

# 🚀 Features

1. Python
   1.1 Show Basic Code Examples

2. React
   2.1 Basics
   2.2 News => Create News Articles + Show in News Overview
   2.3 Vertical Timeline Example

3. React & Django
   3.1 News => Create News Articles + Show in News Overview

4. Bootstrap
   3.1 Basics

Playground Application with:

- ✅ REACT Playground

<br>

# 🧪 Roadmap

- 🔜 Coming Soon: for now nothing on the Roadmap

<br>

# 🔧 DEVELOPMENT HOW TO

1. Application is dockerized => Start Docker (Desktop)
2. There is a STAGE and PROD env

## STAGE

Start the STAGE Containers
docker-compose -f docker-compose-stage.yml up

## PROD on Local Machine


Start the PROD Containers in Local DEV (Containers must be build already on ghcr.io via GitHub Actions)
docker-compose -f docker-compose-prod.yml up

- Editing python => use virtual env (venv)

<br>

# 🤬 Hints to not cry everytime

- ...

TODO README

- Extended the django backend structure with a "settings" folder with base, development and production settings

Nginx Handles:
/ → React frontend

/admin/ → Django backend (via proxy)

/staticfiles/ → Django static assets

- django checks for commands that are within installed apps (for example createsu.py file for creating superuser on the fly)

- access django backend on stage only directly via port because the staticfiles are not collected and this would lead to problem with react development mode

TODO Readme

- GitHub Actions legt Docker Files in GitHub Store ab auf die dann wiederrum

1. mit "Docker-compose-prod" werden die Container erstellt
2. docker-compose-prod.yml => Ist dann für das Runterladen zuständig aus dem GHCR (GitHub Container Registry)

Django Admin Oberfläche wird via Staticfiles über nginx direkt ausgegeben deswegen ist es nicht via Port :8000 erreichbar

❌ Why It's Not Working
React’s environment variables like the :baseUrl = process.env.REACT_APP_API_URL;
MUST be defined at build time, not at runtime.
Setting env_file: or environment: in Docker Compose does not pass values into a React build.
So: your REACT_APP_API_URL must be present during npm run build or npm start, inside the Dockerfile.

Helping Tipps:

1. Check Docker notes => Quick Cheat Sheet
