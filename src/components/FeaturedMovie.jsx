import React from 'react';
import './style/FeaturedMovie.css'

function FeaturedMovie({item}) {

  let firstDate = new Date(item.first_ait_date);

  return (
   <section className="featured" style={{
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
   }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <h1 className="featured--name"> {item.original_name}</h1>
          <div className="featured--info" >
            <span className="featured--points">{item.vote_average} pontos</span>
            <span className="featured--year">{firstDate.getFullYear()}</span>
            <span className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons >= 2 ? "s" : '' }</span>
          </div>
          <div className="featured--description">{item.overview}</div>
          <div className="featured--buttons"></div>
          <div className="featured--genres"><strong>Gêneros:</strong>...</div>

        </div>
      </div>
   </section>
  );
}

export default FeaturedMovie;
