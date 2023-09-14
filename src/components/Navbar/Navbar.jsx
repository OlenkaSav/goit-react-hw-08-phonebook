import { Link, NavLink } from 'react-router-dom';
import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavbarUser';
import useAuth from 'hooks/useAuth';
import styled from 'styled-components';
import Logo from '../../components/LogoPic.png';
import useLang from '../../hooks/useLang';
import contentText from '../../Lang/contentText.json';

const Navbar = () => {
  const isLogin = useAuth();
  const { lang } = useLang();
  const pageContacts = contentText.pageContacts[lang];
  return (
    <Layout>
      <Link to="/">
        <img src={Logo} alt="logo" width={50} />
      </Link>
      {isLogin && <SContacts to="/my-contacts">{pageContacts}</SContacts>}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;
const SContacts = styled(NavLink)`
  display: flex;
  margin-left: 400px;
  text-decoration: none; 
`;

export default Navbar;
