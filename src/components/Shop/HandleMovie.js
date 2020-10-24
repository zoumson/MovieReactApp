import React, { useState, useEffect } from 'react';
//import Dialogue from '../Dialogue/Dialogue';
import AlertDialogSlide from '../Dialogue/AlertDialogSlide';
import './App.css';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

const MOVIE_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7804a403'; // you should replace this with yours

const HandleMovie = (props) => {
  const { log } = props;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };
  /* Movie error styling */
  const movieErrorStyle = {
    background: 'red',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  };
  /* Show error when movie not found */
  const ShowError = () => {
    return (
      <div style={movieErrorStyle} className="errorMessage">
        {errorMessage}
      </div>
    );
  };
  /* Render Movie from the search */

  const ShowMovies = () => {
    return (
      <div className="movies" style={{ marginTop: '20px' }}>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <ShowError />
        ) : (
          movies &&
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    );
  };

  return (
    <div className="App">
      {movies && console.log(movies.length)}
      <Search search={search} log={log} />
      <ShowMovies />
    </div>
  );
};

export default HandleMovie;
