# **Weather App**

A weather application that allows users to fetch and display current weather information for a specific city and country. The application is containerized using Docker for seamless setup and deployment.


## **Features**
- Fetch real-time weather information using the OpenWeatherMap API.
- Save weather search history in a MySQL database.
- Retrieve and delete historical weather data.
- Responsive frontend for user interaction.
- Dockerized setup for easy deployment.


## **Technologies Used**
- **Frontend**: ReactJS
- **Backend**: Node.js with Express
- **Database**: MySQL
- **Containerization**: Docker and Docker Compose


## **Setup and Installation**

### **Prerequisites**
Ensure you have the following installed:
- Node.js (v16 or later)
- Docker and Docker Compose installed on your system.

### **Build and Start the Application**
Run the following command:

```bash
docker-compose up --build
```

This will:
- Start MySQL, backend, and frontend services.
- Apply any initialization scripts in data/mysql.


### **Access the Application**

Frontend: http://localhost:3000

Backend: http://localhost:5000

## **Design Decisions and Assumptions**
**Data Persistence**: Weather search history is saved in a MySQL database.

**Error Handling**: Implemented basic error handling for invalid inputs and database errors.


## **Troubleshooting**
**Database Connection Issues**:

- Ensure the MySQL container is running.

- Verify DB_HOST, DB_USER, and DB_PASSWORD in docker-compose.yml and db.js are correct.

**Docker Issues**:
If ports are already in use, modify the ports section in docker-compose.yml.

**Frontend Not Loading**:

Verify the frontend container is running and check the logs using:
```bash
docker logs weather_app_frontend
```