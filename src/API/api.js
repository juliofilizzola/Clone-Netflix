const TOKEN = '704d07c4b4e0e2a81e1af4be6818d35d';
const URL_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const request = await fetch(`${URL_BASE}${endpoint}`);
  const response = await request.json();
  return response;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals', 
        title: 'Originais da NetFlix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${TOKEN}`)
      },
      {
        slug: 'trending', 
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${TOKEN}`)
      },
      {
        slug: 'toprated', 
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${TOKEN}`)
      },
      {
        slug: 'action', 
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${TOKEN}`)
      },
      {
        slug: 'comedy', 
        title: 'Comedia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${TOKEN}`)
      },
      {
        slug: 'horror', 
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${TOKEN}`)
      },
      {
        slug: 'romance', 
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${TOKEN}`)
      }, {
        slug: 'documentary', 
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${TOKEN}`)
      }
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId) {
      switch (type) {
        case 'movie':
            info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${TOKEN}`);
          
          break;
        case 'tv':
            info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${TOKEN}`);
          break;
        default:
          info = null
          break;
      }
    }

    return info;
  }
};
