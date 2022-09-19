import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import RegisterForm from '../RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/authOperations';

import { getAuthError, isAuth } from '../../redux/selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onRegister = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }

  return (
    <div className="container">
      <h2>Register Page</h2>
      <RegisterForm onSubmit={onRegister} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
};

export default RegisterPage;