import Arrow from "./Arrow";
import './ElbowControls.css';
import './Controls.css';

function ElbowControls() {
  return (
    <div className="elbowControls">
      <div className="controls">
        <Arrow direction="left" onClick={() => {}} />
        <Arrow direction="right" onClick={() => {}} />
      </div>
    </div>
  );
}

export default ElbowControls;
