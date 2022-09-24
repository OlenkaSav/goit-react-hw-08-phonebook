import Navbar from './Navbar/Navbar';
import UserRoutes from './UseRouts';
import Lang from 'Lang';
import { useEffect } from 'react';
import { current } from '../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <SBody className="App">
      <Navbar />
      <UserRoutes />
      <Lang />
    </SBody>
  );
}

const SBody = styled.div`
  padding: 20px;
  background-color: #b4f4f4;
  height: 100vh;
  /* font-size: 40px; */
`;
export default App;
