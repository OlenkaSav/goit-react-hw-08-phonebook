import { Link, NavLink } from 'react-router-dom';
import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavbarUser';
import useAuth from 'hooks/useAuth';

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <div>
      <Link to="/">Logo</Link>
      {isLogin && <NavLink to="/my-contacts">Contacts</NavLink>}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
