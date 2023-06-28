import PropTypes from 'prop-types';
import css from './CastItem.module.css';

const CastItem = ({ character, name, img }) => (
  <div className={css.wrapper}>
    <img
      className={css.img}
      src={
        img
          ? `https://www.themoviedb.org/t/p/w500/${img}`
          : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
      }
      alt={name}
    />
    <div>
      <p className={css.name}>{name}</p>
      <p className={css.character}>{character}</p>
    </div>
  </div>
);

export default CastItem;

CastItem.PropTypes = {
  character: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
};
