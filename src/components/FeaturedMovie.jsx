import React from 'react';
import './style/FeaturedMovie.css'

function FeaturedMovie({item}) {
  return (
   <section className="featured" style={{
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
   }}>
      <div>{item.original_name}</div>
   </section>
  )
}

export default FeaturedMovie;
