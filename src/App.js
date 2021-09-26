import React from 'react';
import {getHomeList, getMovieInfo} from './API/api';
import './style/app.css'
import MoviesRow from './components/MoviesRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);

  
  React.useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList();
      setMovieList(list);
      let originals = list.filter((item) => item.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)
    };
    loadAll();
  }, []);

  React.useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 200) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  })
  
  return (
    <div className="page">
      <Header blackHeader={ blackHeader } />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList && movieList.map((mov, index) => (
          <div key={index}>
              <MoviesRow title={mov.title} items={mov.items}/>
          </div>
        ))}
      </section>

      { movieList.length === 0 && (
        <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carrgando"/>
      </div>)}
      <Footer />
    </div>
  );
}

export default App;
