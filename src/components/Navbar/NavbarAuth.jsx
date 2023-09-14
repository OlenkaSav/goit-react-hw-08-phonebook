import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarAuth = () => {
  return (
    <SPanel>
      <NavLink to="/register">Register</NavLink>|
      <NavLink to="/login">Login</NavLink>
    </SPanel>
  );
};

const SPanel = styled.div`
  margin-left: auto;
  margin-right: 130px;
  font-size: 30px;
`;
export default NavbarAuth;
