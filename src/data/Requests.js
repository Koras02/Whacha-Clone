const API_KEY = "7db8b1ffbba88aaa67068565d84fe99f";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ko-KR`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko-KR`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko-KR`,
  fetchAnimeSeries: `/discover/tv/?api_key=${API_KEY}&with_genres=10749&language=ko-KR`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_geners=8195&language=ko-KR`,
  fecthMistaryMovies: `/discover/tv?api_key=${API_KEY}&with_geners=11212&language=ko-KR`,
};

export default requests;
