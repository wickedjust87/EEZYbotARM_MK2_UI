import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import './ShoulderControls.css';
import './Controls.css';

function ShoulderControls() {
  return (
    <div className="shoulderControls">
      <div className="controls">
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default ShoulderControls;
