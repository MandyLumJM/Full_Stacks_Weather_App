import React, { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import HistoryList from "./HistoryList";
import {
  fetchHistory as fetchHistoryApi,
  fetchWeather as fetchWeatherApi,
  deleteSearch as deleteSearchApi,
} from "../api";

function WeatherPage() {
  const [history, setHistory] = useState([]);
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState("");

  useEffect(() => {
    fetchHistoryList();
  }, []);

  const validateInput = (city, country) => {
    let validationResult = true;

    if (!city.trim() && !country.trim()) {
      setWeatherError("City and Country are mandatory!");
      validationResult = false;
    } else if (!city.trim()) {
      setWeatherError("City is mandatory!");
      validationResult = false;
    } else if (!country.trim()) {
      setWeatherError("Country is mandatory!");
      validationResult = false;
    }

    return validationResult;
  };

  const fetchWeather = async (city, country) => {
    const validationResult = validateInput(city, country);

    if (validationResult) {
      try {
        const response = await fetchWeatherApi(city, country);

        if (response && Object.keys(response).length > 0) {
          setWeather(response);
          setWeatherError("");
          fetchHistoryList();
        }
      } catch (err) {
        setWeatherError("Not Found!");
      }
    }
  };

  const fetchHistoryList = async () => {
    const response = await fetchHistoryApi();

    if (response && Array.isArray(response)) {
      setHistory(response);
    }
  };

  const deleteHistory = async (id) => {
    await deleteSearchApi(id);
    fetchHistoryList();
  };

  return (
    <div className="card px-4 pt-4 my-4">
      <h3 className="border-bottom">Today's Weather</h3>
      <WeatherForm
        fetchWeather={fetchWeather}
        weather={weather}
        error={weatherError}
      />
      <HistoryList
        history={history}
        deleteHistory={deleteHistory}
        fetchWeather={fetchWeather}
        updateWeather={setWeather}
      />
    </div>
  );
}

export default WeatherPage;
