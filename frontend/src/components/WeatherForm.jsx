import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import moment from "moment";

const WeatherForm = (props) => {
  const { fetchWeather, weather = {}, error = "" } = props;
  const {
    city: cityWeather = "",
    condition = "",
    country: countryWeather = "",
    temperature = "",
  } = weather || {};
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);

  const onHandleFetchWeather = async (event) => {
    event.preventDefault();
    if (fetchWeather) {
      setFetchLoading(true);
      await fetchWeather(city, country);
      setFetchLoading(false);
    }
  };

  const onHandleClearInput = () => {
    setCity("");
    setCountry("");
  };

  return (
    <div className="pb-3">
      <form onSubmit={onHandleFetchWeather}>
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={fetchLoading}
            >
              {fetchLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-1"
                    role="status"
                  ></span>
                  Loading...
                </>
              ) : (
                <>Search</>
              )}
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-secondary w-100"
              type="button"
              onClick={onHandleClearInput}
            >
              Clear
            </button>
          </div>
        </div>
      </form>

      {error && <div className="text-danger mt-3">{error}</div>}
      {weather && (
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col text-secondary">
                <span>
                  {cityWeather}, {countryWeather}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="text-capitalize">{condition}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-3 text-secondary">
                <div>Description:</div>
              </div>
              <div className="col-9">
                <div>{condition}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 text-secondary">
                <div>Temperature:</div>
              </div>
              <div className="col-9">
                <div>{temperature}&deg;C</div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 text-secondary">
                <div>Time:</div>
              </div>
              <div className="col-9">
                <div>{moment(new Date()).format("yyyy-MM-DD hh:mm A")}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherForm;
