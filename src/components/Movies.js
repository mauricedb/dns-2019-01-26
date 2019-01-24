import React, { Component, lazy, Suspense } from 'react';
import './Movies.css';

import Loading from './Loading';
import MovieListCard from './MovieListCard';
// import SelectedMovie from './SelectedMovie';
const SelectedMovie = lazy(() => import('./SelectedMovie'));

class Movies extends Component {
  static displayName = 'Movies';

  state = {
    selected: null
  };

  onMovieClicked = selected => this.setState({ selected });

  onMovieCleared = () => this.setState({ selected: null });

  render() {
    const { loading, movies, error } = this.props;
    const { selected } = this.state;

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
                onMovieClicked={this.onMovieClicked}
              />
            ))}
          </div>
          {selected && (
            <SelectedMovie
              key={selected.id}
              selected={selected}
              onMovieCleared={this.onMovieCleared}
            />
          )}
        </Suspense>
      </div>
    );
  }
}

export default Movies;
