import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import moment from "moment";

const HistoryList = (props) => {
  const { history = [], deleteHistory, fetchWeather } = props;

  const onHandleDeleteHistory = (id) => {
    if (deleteHistory) {
      deleteHistory(id);
    } else {
      console.log("Delete History function is required!");
    }
  };

  const onHandleFetchWeather = (city, country) => {
    if (fetchWeather) {
      fetchWeather(city, country);
    } else {
      console.log("Fetch Weather function is required!");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="border-bottom">Search History</h4>

      {history.length > 0 ? (
        history.map((record, index) => {
          const { id = "", city = "", country = "", created_at = "" } = record;

          return (
            <div
              className="d-flex justify-content-between align-items-center py-2 my-2 border-bottom"
              key={id}
            >
              <span>
                {index + 1}. {city}, {country}
              </span>
              <div className="ms-auto">
                <span className="p-3">
                  {moment(new Date(created_at)).format("hh:mm:ss A")}
                </span>

                <button
                  className="btn btn-light btn-sm me-3"
                  onClick={() => onHandleFetchWeather(city, country)}
                >
                  <i class="bi bi-search"></i>
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onHandleDeleteHistory(id)}
                >
                  <i className="bi bi-trash3" />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center py-5">
          <span className="text-muted bold">No Record</span>
        </div>
      )}
    </div>
  );
};

export default HistoryList;
