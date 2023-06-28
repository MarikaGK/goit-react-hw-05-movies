import css from './Home.module.css';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/TMDBapi';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getTrending = async () => {
      const newTrending = await getTrendingMovies();
      setTrending(newTrending);
      setIsLoading(false);
    };
    getTrending();
  }, []);

  return (
    <div className={css.home}>
      {isLoading ? (
        <Loader />
      ) : (
        <MoviesList listTitle="Trending today" moviesList={trending} />
      )}
    </div>
  );
};

export default Home;
