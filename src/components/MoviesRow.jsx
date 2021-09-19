import React from 'react';
import './style/MoviesRow.css'

function MoviesRow({title, items}) {
  return (
    <div className="movieRow">
      <h1>{title}</h1>
      <div className="movieRow--listearea">
      <div className="movieRow--list">
        {items.results.length > 0 && items.results.map((item, index) => (
          <div className="movieRow--item" key={index}>

            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}  alt={item.original_title}/>
        </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default MoviesRow
