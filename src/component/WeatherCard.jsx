import React from 'react'
import './WeatherCard.css'
import WeatherCloudy from '../assets/weather-cloudy.png'

function WeatherCard() {
  return (
    <div className='weather-section'>
        <div className='weather-card'>
            <div className='weather-temp-c'>
                23<sup>o</sup>
            </div>
            <div className='weather-info'>
                <span>
                    🌈 57
                </span>
                <span>
                    🌥️ 25
                </span>
            </div>
            <div className="weather-place">
                New Delhi, Delhi, India
            </div>
            <div className="weather-avatar">
                <img src={WeatherCloudy} alt="" />
            </div>
        </div>
    </div>
  )
}

export default WeatherCard