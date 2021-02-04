//Tipicamente se almacena en {process.env.API_KEY}
const API_KEY = "0aa2360519f89bc8a2d3f70470809894";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languaje=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fecthTopRated: `/movie/top_rated?api_key=${API_KEY}&languaje=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
