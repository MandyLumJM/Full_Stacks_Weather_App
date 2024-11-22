# Frontend - Weather App

This directory contains the source code for the React-based frontend of the Weather App.

---

## **Technologies Used**
- React.js
- Axios for API requests
- Bootstrap for responsive design

---

## **Setup Instructions**

1. **Install Dependencies**
   bash
   Copy code
   Navigate to the `frontend` directory and run:
   ```bash
   npm install

2. **Start Local**
   bash
   Copy code
   npm start

3. **Run with Docker**
   Build and run the frontend as a container:
   bash
   Copy code
   docker build -t weather_app_frontend .
   docker run -p 3000:3000 weather_app_frontend
   
---

## **Key Features**
1. Responsive Design: Built using Bootstrap for compatibility across screen sizes.
2. Weather Search: Fetch weather information by city and country.
3. Search History: Displays recent searches for easy access.
4. Error Handling: Displays error messages for invalid inputs.