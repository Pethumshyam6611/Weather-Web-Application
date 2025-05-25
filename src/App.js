import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import '../styles/App.css';

const mockWeatherData = {
  current: {
    temperature: 25,
    feelsLike: 27,
    condition: 'Sunny',
    humidity: 60,
    windSpeed: 10,
    windDirection: 'NW',
    pressure: 1012,
    uvIndex: 5,
  },
  hourly: [
    { time: '10:00', temperature: 26, condition: 'Sunny', precipitationChance: 5 },
    { time: '11:00', temperature: 27, condition: 'Partly Cloudy', precipitationChance: 10 },
    { time: '12:00', temperature: 28, condition: 'Cloudy', precipitationChance: 15 },
    { time: '13:00', temperature: 27, condition: 'Sunny', precipitationChance: 5 },
    { time: '14:00', temperature: 26, condition: 'Partly Cloudy', precipitationChance: 10 },
  ],
  daily: [
    { day: 'Monday', highTemp: 30, lowTemp: 20, condition: 'Sunny' },
    { day: 'Tuesday', highTemp: 28, lowTemp: 19, condition: 'Partly Cloudy' },
    { day: 'Wednesday', highTemp: 26, lowTemp: 18, condition: 'Cloudy' },
    { day: 'Thursday', highTemp: 29, lowTemp: 21, condition: 'Sunny' },
    { day: 'Friday', highTemp: 27, lowTemp: 20, condition: 'Showers' },
  ],
};

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [units, setUnits] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load mock data on component mount for initial UI rendering
    setWeatherData(mockWeatherData);
  }, []);

  // Placeholder functions for fetching data and handling unit changes
  // These will be implemented in later tasks
  const handleSearch = async (searchLocation) => {
    setLoading(true);
    setError(null);
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would fetch data based on searchLocation and units
      // For now, we'll just update the location and keep mock data
      setLocation(searchLocation);
      setWeatherData(mockWeatherData); // Or fetch new data based on location
      setLoading(false);
    }, 1000);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
    // Potentially re-fetch data or convert existing data
  };

  return (
    <div className="App">
      <Header onUnitsChange={handleUnitsChange} currentUnits={units} />
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && weatherData && (
        <>
          <CurrentWeatherCard data={weatherData.current} units={units} />
          <HourlyForecast data={weatherData.hourly} units={units} />
          <DailyForecast data={weatherData.daily} units={units} />
        </>
      )}
      {!loading && !error && !weatherData && (
        <p>Search for a location to see the weather.</p>
      )}
    </div>
  );
}

export default App;
