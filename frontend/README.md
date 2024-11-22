# Frontend - Weather App

This directory contains the source code for the React-based frontend of the Weather App.


## **Technologies Used**
- React.js
- Axios for API requests
- Bootstrap for responsive design


## **Setup Instructions**

1. **Install Dependencies**

   Navigate to the `frontend` directory and run:
   ```bash
   npm install

2. **Start Local**
   ```bash
   npm start

3. **Run with Docker**
  
   Build and run the frontend as a container:
   ```bash
   docker build -t weather_app_frontend .
   docker run -p 3000:3000 weather_app_frontend


## **Key Features**
- **Responsive Design**: Built using Bootstrap for compatibility across screen sizes.
- **Weather Search**: Fetch weather information by city and country.
- **Search History**: Displays recent searches for easy access.
- **Error Handling**: Displays error messages for invalid inputs.