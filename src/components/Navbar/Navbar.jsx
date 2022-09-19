import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Logo</Link>
      <NavLink to="/my-contacts">Contacts</NavLink>|
      <NavLink to="/register">Register</NavLink>|
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Navbar;
