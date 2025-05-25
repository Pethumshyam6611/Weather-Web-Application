import React from 'react';
import '../styles/CurrentWeatherCard.css';
// import WeatherIcon from './WeatherIcon'; // Future import

const CurrentWeatherCard = ({ data, units }) => {
  if (!data) {
    return <p>No current weather data available.</p>;
  }

  const {
    temperature,
    feelsLike,
    condition,
    humidity,
    windSpeed,
    windDirection,
    pressure,
    uvIndex,
    // icon_code, // Assuming an icon_code might be part of data in the future
  } = data;

  const displayUnits = units === 'metric' ? 'C' : 'F';
  const displaySpeedUnits = units === 'metric' ? 'km/h' : 'mph';

  return (
    <div className="current-weather-card">
      <div className="main-info">
        {/* Placeholder for WeatherIcon component */}
        <div className="weather-icon">
          {/* <WeatherIcon code={icon_code} /> */}
          <span>Icon Placeholder</span> {/* Replace with actual icon or WeatherIcon component */}
        </div>
        <div className="temperature-details">
          <span className="temperature">{temperature}°{displayUnits}</span>
          <span className="condition">{condition}</span>
        </div>
      </div>
      <div className="feels-like">
        Feels like: {feelsLike}°{displayUnits}
      </div>
      <div className="additional-details">
        <p>Humidity: {humidity}%</p>
        <p>Wind: {windSpeed} {displaySpeedUnits} {windDirection}</p>
        <p>Pressure: {pressure} hPa</p>
        <p>UV Index: {uvIndex}</p>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
