import useForm from '../../hooks/useForm';
import styled from 'styled-components';
import useLang from '../../hooks/useLang';
import contentText from '../../Lang/contentText.json';

const initialState = {
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { lang } = useLang();

  const { email, password } = state;

  const userEmail = contentText.userEmail[lang];
  const userPassword = contentText.userPassword[lang];
  const loginBtn = contentText.loginBtn[lang];
  const enterEmail = contentText.enterEmail[lang];
  const enterPass= contentText.enterPass[lang];
  return (
    <SForm action="" onSubmit={handleSubmit}>
      <SField>
        <label htmlFor="">{userEmail}: </label>
        <StyledInput
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder={enterEmail}
        />
      </SField>
      <SField>
        <label htmlFor="">{userPassword}: </label>
        <StyledInput
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder={enterPass}
        />
      </SField>
      <StyledBtn type="submit">{loginBtn}</StyledBtn>
    </SForm>
  );
};

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 100%;
  padding: 20px;
  border: solid black 1px;
  font-size: 25px;
`;

const StyledInput = styled.input`
  width: 250px;
  height: 30px;
  padding-left: 10px;
  border-radius: 10px;
  margin-left: 10px;
  padding-left: 10px;
  -moz-box-shadow: 3px 4px 2px #333333;
  -webkit-box-shadow: 3px 4px 2px #333333;
  box-shadow: 3px 4px 2px #333333;
  font-size: 20px;
`;

const SField = styled.div`
  margin: 10px;
`;

const StyledBtn = styled.button`
  margin: auto;
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

export default RegisterForm;
