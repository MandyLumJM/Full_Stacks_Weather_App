# **Backend - Weather App**

This directory contains the source code for the Node.js-based backend of the Weather App.


## **Technologies Used**
- Node.js with Express.js for building RESTful APIs.
- MySQL for database management.
- Axios for making external API calls.
- Docker for containerization.


## **Setup Instructions**
1. **Install Dependencies**

   Navigate to the `backend` directory and run:
   ```bash
   npm install
   ```

2. **Create `.env` file**
    ```
    - NODE_ENV=local
    - PORT=5000
    - OPENWEATHER_API_KEY=8b279222e23fbb873eba6f12791013f5
    - DB_HOST=weather_app_db
    - DB_USER=root
    - DB_PASSWORD=admin123
    - DB_PORT=3306
    - DB_NAME=weather_db
    ```

3. **Start Local**
   ```bash
   npm start
   ```