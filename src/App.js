import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Search from './component/Search';
import WeatherCard from './component/WeatherCard';

function App() {

  const [weatherDetails, setWeatherDetails] = React.useState(null);
  
  return (
    <div className="App">
      <div className='app-container'>
        <Header />
        <Search setWeatherDetails={setWeatherDetails} />
        {
          weatherDetails !== null ? <WeatherCard weatherDetails={weatherDetails} /> : null
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
