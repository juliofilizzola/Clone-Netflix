const TOKEN = '704d07c4b4e0e2a81e1af4be6818d35d';
const URL_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const request = await fetch(`${URL_BASE}${endpoint}`);
  const response = await request.json();
  return response;
}

export default {
  getHomeList: asybc () => {
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
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${TOKEN}`)
      },
      {
        slug: 'comedy', 
        title: 'Comedia',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${TOKEN}`)
      },
      {
        slug: 'horror', 
        title: 'Terror',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${TOKEN}`)
      }
    ]
  }
}