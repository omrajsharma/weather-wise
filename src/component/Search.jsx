import React from 'react'
import axios from 'axios'
import './Search.css'

function Search({
  setWeatherDetails
}) {
  const [search, setSearch] = React.useState('')

  function handleInput(e) {
    setWeatherDetails(null)
    setSearch(e.target.value)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {

      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: search},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        setWeatherDetails(response.data)
      }).catch(function (error) {
        alert('Please enter a valid city name')
        console.error(error);
      });

    }
  }

  return (
    <div className='search-section'>
        <div className="search-container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input type="text" placeholder="Search for a city" onChange={handleInput} onKeyDown={handleKeyDown} />
        </div>
    </div>
  )
}

export default Search