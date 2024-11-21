# Full_Stacks_Weather_App

A full-stack weather application that allows users to search for the current weather by city and country, view search history, and manage previous searches. The app is built with React (frontend) and Node.js (backend), uses MySQL for data persistence, and is containerized using Docker.

Features
Search weather data by city and country.
Fetch data from the OpenWeather API.
Store search history in MySQL.
Delete or re-search from history.
Responsive UI using Bootstrap.
Containerized with Docker for easy deployment.

Technologies Used
Frontend
- React.js
- Axios for API calls
- Bootstrap for responsive UI

Backend
- Node.js with Express
- MySQL for database
- OpenWeather API
- Docker
- Docker Compose

Requirements
Ensure you have the following installed:

Node.js (v16 or later)
Docker
Docker Compose
MySQL Workbench (optional, for database inspection)

Build and Start the Application

Run the following command:
bash
Copy code
docker-compose up --build
This will:
Start MySQL, backend, and frontend services.
Apply any initialization scripts in data/mysql.
Access the Application

Frontend: http://localhost:3000
Backend: http://localhost:5000


Testing the Application
Access the Frontend:
Use the web interface to search for weather by city and country.

Cleaning Up
To stop and remove all containers, networks, and volumes:

bash
Copy code
docker-compose down -v


# Build Docker Images
docker-compose build

# Start Docker Services
docker-compose up -d

# Build and Start Application
docker-compose up --build

# Container Status
docker-compose ps

# Container logs
docker-compose logs backend
docker-compose logs frontend

# Docker clean up
docker-compose down -v

# Clear Docker Build Cache
docker builder prune --force

# Rebuild Without Cache
docker-compose build --no-cache