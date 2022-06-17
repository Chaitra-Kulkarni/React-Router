import { NavLink } from "react-router-dom";

export const Navbar = () => {

    const navLinkStyles = ({isActive}) => {
        return {
            textDecoration: isActive ? 'none' : 'under-line',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

  return (
    <nav>
      <NavLink to="/" style={navLinkStyles}>Home</NavLink>
      <NavLink to="/about" style={navLinkStyles}>About</NavLink>
    </nav>
  );
};
