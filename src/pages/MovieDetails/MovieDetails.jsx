import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';
import { getMovieDetailsByMovieId } from 'services/TMDBapi';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieDetails = async id => {
      const newDetails = await getMovieDetailsByMovieId(id);
      setDetails(newDetails);
    };
    getMovieDetails(movieId);
  }, [movieId]);

const { poster_path, title, genres, vote_average, overview } = details;

  return (
    <>
      <div className={css.wrapper}>
        <Link className={css.goBackBtn} to={backLinkRef.current}>Go back</Link>
        <div className={css.movieDetails}>
        <img 
      className={css.img}
      src={
        poster_path
          ? `https://www.themoviedb.org/t/p/w500/${poster_path}`
          : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
      }
      alt={title} width='240' />
        <div className={css.descriptionWrapper}>
          <h3 className={css.h3}>{title}</h3>
          <h5 className={css.h5}>User Score: {vote_average}</h5>
          <div className={css.description}>
            <h5 className={css.descTitle}>Overview</h5>
            <p className={css.desc}>{overview}</p>
          </div>
          <div className={css.description}>
            <h5 className={css.descTitle}>Genres</h5>
            <p className={css.desc}>{genres && genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
        </div>
      </div>
      <div className={css.wrapper}>
        <h3 className={css.h3}>Additional information</h3>
        <ul className={css.list}>
          <li className={css.listItem}>
            <Link className={css.link} to="cast">
              Cast
            </Link>
          </li>
          <li className={css.listItem}>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
