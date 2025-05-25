import React from 'react';
import '../styles/HourlyForecast.css';
// import WeatherIcon from './WeatherIcon'; // Future import

const HourlyForecast = ({ data, units }) => {
  if (!data || data.length === 0) {
    return (
      <div className="hourly-forecast-card">
        <h2>Hourly Forecast</h2>
        <p>Hourly forecast not available.</p>
      </div>
    );
  }

  const displayUnits = units === 'metric' ? 'C' : 'F';

  return (
    <div className="hourly-forecast-card">
      <h2>Hourly Forecast</h2>
      <div className="hourly-items-container">
        {data.map((item, index) => (
          <div className="hourly-item" key={index}>
            <p className="hourly-time">{item.time}</p>
            {/* Placeholder for WeatherIcon component */}
            <div className="weather-icon-placeholder">
              {/* <WeatherIcon code={item.icon_code} /> */}
              <span>Icon: {item.icon_code || 'N/A'}</span> {/* Placeholder */}
            </div>
            <p className="hourly-temperature">{item.temperature}°{displayUnits}</p>
            <p className="hourly-condition">{item.condition}</p>
            {item.precipitationChance !== undefined && (
              <p className="hourly-precipitation">
                Precip: {item.precipitationChance}%
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
