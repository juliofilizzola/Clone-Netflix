import React from 'react';
import './style/MoviesRom.css'

function MoviesRow({title, items}) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="movieRow--listarea">
        {items.results.length > 0 && items.results.map((item, key) => (
          <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
        ))}
      </div>
    </div>
  )
}

export default MoviesRow