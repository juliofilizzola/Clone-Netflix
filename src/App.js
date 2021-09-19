import React from 'react';
import API from './API/api';
import './style/app.css'
import MoviesRow from './components/MoviesRow';

function App() {
  const [movieList, setMovieList] = React.useState([]);

  React.useEffect(() => {
    const loadAll = async () => {
      let list = await API.getHomeList();
      setMovieList(list);
      console.log(list)
    };
    loadAll();
  }, [])
  return (
    <div className="page">
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
