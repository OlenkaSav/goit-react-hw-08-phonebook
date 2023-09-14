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
      <SContainer>
        <Navbar />
        <UserRoutes />
        <Lang />
      </SContainer>
    </SBody>
  );
}

const SBody = styled.div`
  margin: auto;
  padding: 20px;
  background-color: #b4f4f4;
  min-height: 100vh;
  height: 100%;`
;
const SContainer = styled.div`
  position: relative;
  width: 1200px;
  margin: auto;
`;
export default App;
