import { useSelector, useDispatch } from 'react-redux';

// import { logout } from '../../../redux/auth/auth-operations';
import { signup } from '../../redux/auth/authOperations';

import { getUser } from '../../redux/selectors';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(signup());

  return (
    <div>
      <span>{name}</span> |
      <button onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
