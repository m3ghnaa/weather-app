import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './Weather';
import Form from './Form';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const fetchWeather = async (city) => {
    const apiKey = 'abe2b866ad2f0347d2543dae0b7fa7f1';
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="weather-container">
          <h1>Weather App</h1>
          <Form fetchWeather={fetchWeather} setCity={setCity} />
          {weatherData && <Weather data={weatherData} />}
        </div>
      </header>
    </div>
  );
}

export default App;
