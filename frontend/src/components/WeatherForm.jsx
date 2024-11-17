import React, { useState } from 'react';

const WeatherForm = (props) => {
  const { fetchWeather } = props;
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const onHandleFetchWeather = () => {
    if (fetchWeather) {
      fetchWeather(city, country, { setWeather, setError });
    }
  }

  return (
    <div className="card p-4 my-4">
      <div className="row g-3">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" onClick={onHandleFetchWeather}>
            Search
          </button>
        </div>
      </div>
      {error && <div className="text-danger mt-3">{error}</div>}
      {weather && (
        <div className="mt-4">
          <h4>
            {weather.city}, {weather.country}
          </h4>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Condition: {weather.condition}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherForm;
