import React from 'react';
import ReactStars from 'react-rating-stars-component';
const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  const reviewValue = Math.random() * (Math.floor(5) - Math.ceil(1) + 1) + 1;
  const movieReviewStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
      <div style={movieReviewStyle}>
        <p>
          <ReactStars count={5} value={reviewValue} edit={false} />
        </p>
      </div>
    </div>
  );
};

export default Movie;
