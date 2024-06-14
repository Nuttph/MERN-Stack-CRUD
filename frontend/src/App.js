import './App.css';
import ControlBar from './components/ControlBar';
import Mode from './components/Mode';

function App() {
  return (
    <>
     <div className='relative'>
      <Mode />
      <div>
        <ControlBar />
      </div>
     </div>
    </>
  );
}

export default App;
