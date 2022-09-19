import useForm from '../../hooks/useForm';

const initialState = {
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      {/* <div>
        <label htmlFor="">Имя пользователя:</label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Введите имя пользователя"
          required
        />
      </div> */}
      <div>
        <label htmlFor="">Email пользователя:</label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Введите email пользователя"
        />
      </div>
      <div>
        <label htmlFor="">Пароль пользователя:</label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Введите пароль пользователя"
        />
      </div>
      <div>
        <button type="submit">Логин</button>
      </div>
    </form>
  );
};

export default RegisterForm;
