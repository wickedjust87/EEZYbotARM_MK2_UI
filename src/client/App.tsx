import robotImage from '/robot.png';
import './App.css';
import ArrowControls from './ArrowControls';

function App() {
  return (
    <div className="App">
      <img src={robotImage} className="robot" alt="EEZYbotARM robot" />
      <ArrowControls location='base' />
      <ArrowControls location='shoulder' />
      <ArrowControls location='elbow' />
      <ArrowControls location='grabber' />
    </div>
  );
}

export default App;
