import css from './SearchBar.module.css';

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
