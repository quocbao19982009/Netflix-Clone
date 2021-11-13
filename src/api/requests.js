const APIKEY = "9f852574fb35403c3bf3047f60082b06";

const requests = {
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`,
  NetflixOriginal: `https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_networks=213`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=28`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=35`,
  horror: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=27`,
  romance: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=10749`,
  documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=99`,
};

export default requests;

// base url for image: https://image.tmdb.org/t/p/
// size: orginal ex: w500
// poster_path from apis
