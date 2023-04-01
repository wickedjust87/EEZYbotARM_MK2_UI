import Arrow from "./Arrow";
import './ShoulderControls.css';
import './Controls.css';

function ShoulderControls() {
  return (
    <div className="shoulderControls">
      <div className="controls">
        <Arrow direction="left" onClick={() => {}} />
        <Arrow direction="right" onClick={() => {}} />
      </div>
    </div>
  );
}

export default ShoulderControls;
