import React, { useState, useEffect } from 'react';
import AlertDialogSlide from '../Dialogue/AlertDialogSlide';
import Movie from './Movie';
import Pagination from '@material-ui/lab/Pagination';

const MOVIE_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7804a403'; // you should replace this with yours

const HomeMovie = (props) => {
  const { log } = props;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState(1);
  const callSearchFunction = () => {
    search('iron man');
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    callSearchFunction();
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
          movies.map((movie, index) => {
            if (
              index === page ||
              index === page + 1 ||
              index === page + 2 ||
              index === page + 3
            )
              return <Movie key={`${index}-${movie.Title}`} movie={movie} />;
          })
        )}
      </div>
    );
  };

  const moviePaginationContainerStyle = {
    position: 'fixed',
    bottom: '100px',
    background: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };
  //<Search search={search} log={log} />
  return (
    <div className="App">
      <ShowMovies />
      <div style={moviePaginationContainerStyle}>
        <Pagination
          count={movies && movies.length}
          variant="outlined"
          shape="rounded"
          size="large"
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default HomeMovie;
