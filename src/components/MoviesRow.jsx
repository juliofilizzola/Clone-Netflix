import React from 'react';
import './style/MoviesRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MoviesRow({title, items}) {
  const [scrollX, setScrollX] = React.useState(-400)

  const handleLeftArrow = () => {
    let valueScrollX = scrollX + Math.round(window.innerWidth / 2);
    if (valueScrollX > 0) {
      valueScrollX = 0;
    };
    setScrollX(valueScrollX);
  };

  const handleRightArrow = () => {
    let valueScrollX = scrollX - Math.round(window.innerWidth / 2);
    let listRow = items.results.length * 150;
    if ((window.innerWidth - listRow) > valueScrollX ) {
      valueScrollX = (window.innerWidth - listRow) - 60;
    }
    setScrollX(valueScrollX);
  };

  return (
    <div className="movieRow">
      <h1>{title}</h1>
      <div className="movieRow--left" onClick={handleLeftArrow} >
        <NavigateBeforeIcon style={{ fontSize: 50 }}/>
      </div>
      <div className="movieRow--right" onClick={handleRightArrow} >
        <NavigateNextIcon  style={{ fontSize: 50 }}/>
      </div>

      <div className="movieRow--listearea">
      <div className="movieRow--list" style={{
        marginLeft: scrollX,
        width: items.results.length * 150
      }}>
        {items.results.length > 0 && items.results.map((item, index) => (
          <div className="movieRow--item" key={index}>

            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}  alt={item.original_title}/>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default MoviesRow;
