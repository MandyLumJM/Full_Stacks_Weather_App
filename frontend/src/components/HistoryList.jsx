import React from 'react';

const HistoryList = (props) => {
  const { history = [], deleteHistory } = props;
  
  const onHandleDeleteHistory = (id) => {
    if (deleteHistory) {
      deleteHistory(id);
    } else {
      console.log("Delete History function is required!");
    }
  }

  console.log(`HistoryList:: ${history}`);

  return (
    <div className="card p-4">
      <h3>Search History</h3>
      {history.length > 0 && history.map((record) => {
        const { id = '', city = '', country = '' } = record;

        return (
          <div className="d-flex justify-content-between align-items-center my-2" key={id}>
            <span>
              {city}, {country}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => onHandleDeleteHistory(id)}>
              Delete
            </button>
          </div>
        )
      })}
    </div>
  );
};

export default HistoryList;
