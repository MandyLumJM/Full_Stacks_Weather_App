import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import HistoryList from './HistoryList';
import { fetchHistory as fetchHistoryApi, fetchWeather as fetchWeatherApi, deleteSearch as deleteSearchApi } from '../api';

function WeatherPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistoryList();
  }, []);

  const fetchWeather = async (city, country, extra) => {
    const { setWeather, setError } = extra;

    if (!city) setError("City is mandatory!");
    if (!country) setError("Country is mandatory!");

    try {
      const response = await fetchWeatherApi(city, country);

      if (response && Object.keys(response).length > 0) {
        setWeather(response);
        setError('');
        fetchHistoryList();
      }
    } catch (err) {
      setError('Invalid city or country');
    }
  };

  const fetchHistoryList = async () => {
    const response = await fetchHistoryApi();

    if (response && Array.isArray(response)) {
      console.log(`fetchHistoryList:: ${response}`)
      setHistory(response);
    }
  };

  const deleteHistory = async (id) => {
    await deleteSearchApi(id);
    fetchHistoryList();
  };

  return (
    <div className="container">
      <h1 className="text-center">Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      <HistoryList history={history} deleteHistory={deleteHistory} />
    </div>
  );
}

export default WeatherPage;
