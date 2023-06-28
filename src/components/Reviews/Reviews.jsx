import { useEffect, useState } from 'react';
import css from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { getMovieReviewsByMovieId } from 'services/TMDBapi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async id => {
      const newReviews = await getMovieReviewsByMovieId(id);
      setReviews(newReviews);
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li className={css.listItem} key={id}>
              <h4 className={css.h4}>{author}</h4>
              <p className={css.review}>{content}</p>
            </li>
          ))
        ) : (
          <h4 className={css.h4}>No reviews yet</h4>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
