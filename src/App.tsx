import robotImage from '/robot.png';
import './App.css';
import BaseControls from './BaseControls';
import ElbowControls from './ElbowControls';
import ShoulderControls from './ShoulderControls';
import GrabberControls from './GrabberControls';

function App() {
  return (
    <div className="App">
      <img src={robotImage} className="robot" alt="EEZYbotARM robot" />
      <BaseControls />
      <ShoulderControls />
      <ElbowControls />
      <GrabberControls />
    </div>
  );
}

export default App;
