import React from 'react';
import './Nav.css';
import requests from './requests';

function Nav({setSelectedOption}) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Tendencias</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchNetflixOriginals)}>Netflix</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAmazonPrime)}>Amazon Prime</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHbo)}>HBO</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchCines)}>En Cines</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchProximamente)}>Proximamente</h2>
    </div>
  )
}

export default Nav
