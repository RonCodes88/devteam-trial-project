import React from 'react'
import axios from 'axios'

const CountryCard = ({ name, capital, region, flag }) => {
  const handleClick = () => {
    axios.post('/api/country', {
      name,
      capital,
      region,
      flag
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="flex gap-12 p-4 bg-slate-200 justify-center items-center rounded-lg shadow-md">
      <div>
        <h3>{name}</h3>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
      </div>

      <img src={flag} alt={name} width="200" />
      <button onClick={handleClick} className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">Pick</button>
    </div>
  )
}

export default CountryCard