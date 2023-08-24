import logo from './logo.svg';
import { FrameChat } from './components/FrameChat';
import { Input } from './components/Input';
import './style/chat.css'

function App() {
  return (
    <>
      <div className='chat'>
        <FrameChat/>
        <Input/>
      </div>
    </>
  );
}

export default App;
