# **Backend - Weather App**

This directory contains the source code for the Node.js-based backend of the Weather App.

---

## **Technologies Used**
- Node.js with Express.js for building RESTful APIs.
- MySQL for database management.
- Axios for making external API calls.
- Docker for containerization.

---

## **Setup Instructions**
1. **Install Dependencies**  
   Navigate to the `backend` directory and run:
   bash
   Copy code   
   npm install

2. **Start Local**
   bash
   Copy code
   npm start

3. **Run with Docker**
   Create a .env file in the backend directory and include:

   env
   Copy code
   NODE_ENV=production
   PORT=3000
   OPENWEATHER_API_KEY=your_openweathermap_api_key
   DB_HOST=mysql
   DB_USER=root
   DB_PASSWORD=my_password
   DB_NAME=weather_db
      Build and run the backend as a container:
      bash
      Copy code
      docker build -t weather_app_backend .
      docker run -p 5000:5000 --env-file .env weather_app_backend
      

---

## **Key Features**
1. **Responsive Design**: Built with Bootstrap for compatibility across screen sizes.
2. **Weather Search**: Fetch and display weather information based on city and country.
3. **Search History**: Show previously searched locations.
4. **Error Handling**: Notify users of invalid inputs or API errors.