const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&with_genres=35&language=es-ES`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_genres=35&language=es-ES`,
  fetchAmazonPrime: `/discover/tv?api_key=${API_KEY}&with_networks=1024&with_genres=35&language=es-ES`,
  fetchTelecinco: `/discover/tv?api_key=${API_KEY}&with_networks=53&with_genres=35&language=es-ES`,
  fetchAtresplayer: `/discover/tv?api_key=${API_KEY}&with_networks=3744&with_genres=35&language=es-ES`,
  fetchHbo: `/discover/tv?api_key=${API_KEY}&with_networks=49&with_genres=35&language=es-ES`,
  fetchCines: `/movie/now_playing?api_key=${API_KEY}&with_genres=35&language=es-ES`,
  fetchProximamente: `/movie/upcoming?api_key=${API_KEY}&with_genres=35&language=es-ES`,
}