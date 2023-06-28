import Container from 'components/Container/Container';
import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import css from './SharedLayout.module.css';
/*import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: coral;
    text-decoration: underline;
  }
`;
*/

const SharedLayout = () => {
  return (
    <Container>
      <nav className={css.nav}>
        <Link className={css.link} to="/">
          Home
        </Link>
        <Link className={css.link} to="/movies">
          Movies
        </Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
