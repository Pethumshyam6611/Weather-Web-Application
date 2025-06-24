import React from 'react';
import '../styles/DailyForecast.css';
// import WeatherIcon from './WeatherIcon'; // Future import

const DailyForecast = ({ data, units }) => {
  if (!data || data.length === 0) {
    return (
      <div className="daily-forecast-card">
        <h2>Daily Forecast</h2>
        <p>Daily forecast not available.</p>
      </div>
    );
  }

  const displayUnits = units === 'metric' ? 'C' : 'F';

  return (
    <div className="daily-forecast-card">
      <h2>Daily Forecast</h2>
      <div className="daily-items-container">
        {data.map((item, index) => (
          <div className="daily-item" key={index}>
            <p className="daily-day">{item.day}</p>
            {/* Placeholder for WeatherIcon component */}
            <div className="weather-icon-placeholder">
              {/* <WeatherIcon code={item.icon_code} /> */}
              <span>Icon: {item.icon_code || 'N/A'}</span> {/* Placeholder */}
            </div>
            <p className="daily-high-temp">High: {item.highTemp}°{displayUnits}</p>
            <p className="daily-low-temp">Low: {item.lowTemp}°{displayUnits}</p>
            <p className="daily-condition">{item.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
