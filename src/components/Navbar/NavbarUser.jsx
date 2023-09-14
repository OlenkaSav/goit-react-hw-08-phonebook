import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';

import { getUser } from '../../redux/selectors';
import styled from 'styled-components';
import useLang from '../../hooks/useLang';
import contentText from '../../Lang/contentText.json';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  const { lang } = useLang();
  const logoutBtn = contentText.logout[lang];
  return (
    <SPanel>
      <span>{name}</span> |
      <StyledBtn onClick={onLogout} type="button">
        {logoutBtn}
      </StyledBtn>
    </SPanel>
  );
};

const SPanel = styled.div`
  margin-left: auto;
  margin-right: 130px;
  font-size: 30px;
`;
const StyledBtn = styled.button`
  margin-left: auto;
  font-family: inherit;
  font-size: 25px;
  color: #210672;
  width: 150px;
  height: 40px;
  cursor: pointer;
  background-color: #4db0ea;
  border-radius: 10px;
  -moz-box-shadow: 3px 4px 2px #333333;
  -webkit-box-shadow: 3px 4px 2px #333333;
  box-shadow: 3px 4px 2px #333333;
`;
export default NavbarUser;
