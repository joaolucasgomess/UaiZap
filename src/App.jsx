import { Chat } from './components/Chat';
import { styled } from "styled-components";

const ContainerBody = styled.div`
  background-color: #222E35;
  display: flex;
  justify-content: center;
  height: 100vh;
`

function App() {

  return (
    <ContainerBody>
      <Chat/>
    </ContainerBody>
  );
}

export default App;
