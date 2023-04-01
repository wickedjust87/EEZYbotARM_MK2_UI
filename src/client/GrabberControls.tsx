import './GrabberControls.css';
import './Controls.css';
import Arrow from './Arrow';

function GrabberControls() {
  return (
    <div className="grabberControls">
      <div className="controls">
        <Arrow direction='release' onClick={() => {}} />
        <Arrow direction='grab' onClick={() => {}} />
      </div>
    </div>
  );
}

export default GrabberControls;
