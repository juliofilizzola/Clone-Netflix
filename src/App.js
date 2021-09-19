import React from 'react';
import API from './API/api';

function App() {
  const [movieList, setMovieList] = React.useState([]);

  React.useEffect(() => {
    const loadAll = async () => {
      let list = await API.getHomeList();
      setMovieList(list);
    };
    loadAll();
  })
  return (
    <div className="page">
      <section className="lists">
        {movieList.map((mov, index) => (
          <div key={index}>
            {mov.title}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
