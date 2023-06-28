import { useState, useEffect } from 'react';
import css from './Cast.module.css';
import { useParams } from 'react-router-dom';
import { getMovieCastByMovieId } from 'services/TMDBapi';
import CastItem from 'components/CastItem/CastItem';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async id => {
      const newCast = await getMovieCastByMovieId(id);
      setCast(newCast);
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {cast.map(({ character, credit_id, name, profile_path }) => (
          <li className={css.listItem} key={credit_id}>
            <CastItem name={name} character={character} img={profile_path} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
