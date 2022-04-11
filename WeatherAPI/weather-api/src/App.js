import React from 'react';
import './App.css';
import WeatherList from './components/WeatherList';
import CityFilter from './components/CityFilter';
import { WeatherProvider } from './context/WeatherContext';
import { CityProvider } from './context/CityContext';

function App() {

  return (
    <div className="App">
      <CityProvider>
        <WeatherProvider>
          <CityFilter />
          <WeatherList />
        </WeatherProvider>
      </CityProvider>
    </div>
  );
}

export default App;
