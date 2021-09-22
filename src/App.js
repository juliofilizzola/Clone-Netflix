import React from 'react';
import API from './API/api';
import './style/app.css'
import MoviesRow from './components/MoviesRow';
import FeaturedMovie from './components/FeaturedMovie';

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);

  React.useEffect(() => {
    const loadAll = async () => {
      let list = await API.getHomeList();
      setMovieList(list);
      let originals = list.filter((item) => item.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await API.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)
    };
    loadAll();
  }, []);
  
  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((mov, index) => (
          <div key={index}>
              <MoviesRow title={mov.title} items={mov.items}/>
          </div>
        ))}
      </section>

    

    </div>
  );
}

export default App;
