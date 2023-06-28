import SearchBar from 'components/SearchBar/SearchBar';
import css from './Movies.module.css';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/TMDBapi';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) return;
    setIsLoading(true);
    const getByQuery = async query => {
      const newByQuery = await getMoviesByQuery(query);
      setSearchedMovies(newByQuery.results);
      setIsLoading(false);
    };
    getByQuery(query);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const formDOM = e.currentTarget;
    const inputQuery = formDOM.elements.query.value.trim();

    if (inputQuery === '') {
      alert(`Please type anything`);
      return;
    }

    setSearchParams({ query: inputQuery });
    formDOM.reset();
  };

  return (
    <div className={css.movies}>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {searchedMovies && (
        <MoviesList listTitle="" moviesList={searchedMovies} />
      )}
    </div>
  );
};

export default Movies;
