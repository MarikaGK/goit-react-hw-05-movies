import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <input className={css.input} name="query"></input>
      <button className={css.formBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

SearchBar.PropTypes = {
  onSubmit: PropTypes.func,
};
