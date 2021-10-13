import { NavLink } from 'react-router-dom';

const BASE_URL = 'goit-react-hw-04-movies';

export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink
          exact
          to={`/${BASE_URL}/`}
          className="nav-link"
          activeClassName="active_nav-link"
        >
          Home
        </NavLink>
        <NavLink
          to={`/${BASE_URL}/movies`}
          className="nav-link"
          activeClassName="active_nav-link"
        >
          Movies
        </NavLink>
      </nav>
      <hr />
    </>
  );
}
