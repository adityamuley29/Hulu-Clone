const API_KEY = process.env.API_KEY;
// const API_KEY = "cd16d8b18d0c481609160de2053024e3";

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchPopular: {
    title: "Popular",
    url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchTv: {
    title: "Tv Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
  fetchAction: {
    title: "Actions",
    url: `/discover/movie?api_key=${API_KEY}&with_networks=28`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },

  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  // fetchDocumentaries: {
  //   title: "Documentaries",
  //   url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // },
};
