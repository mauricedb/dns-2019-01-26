import React, { Component, lazy, Suspense, useState } from 'react';
import useFetch from './useAbortableFetch';
import './Movies.css';

import Loading from './Loading';
import MovieListCard from './MovieListCard';
const SelectedMovie = lazy(() => import('./SelectedMovie'));

const Movies = () => {
  const { loading, data: movies, error } = useFetch('/movies.json');
  const [selected, setSelected] = useState(null);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error">{error.message}</div>;
  }

  if (!movies) {
    return null;
  }

  return (
    <div className="container">
      <Suspense fallback={<Loading />}>
        <div className="movies">
          {movies.map(movie => (
            <MovieListCard
              key={movie.id}
              movie={movie}
              onMovieClicked={m => setSelected(m)}
            />
          ))}
        </div>
        {selected && (
          <SelectedMovie
            key={selected.id}
            selected={selected}
            onMovieCleared={() => setSelected(null)}
          />
        )}
      </Suspense>
    </div>
  );
};

Movies.displayName = 'Movies';

export default Movies;
