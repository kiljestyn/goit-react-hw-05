import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const activePage = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav>
      <NavLink to="/" className={activePage}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activePage}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
