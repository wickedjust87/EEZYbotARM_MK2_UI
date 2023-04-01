import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import './ElbowControls.css';
import './Controls.css';

function ElbowControls() {
  return (
    <div className="elbowControls">
      <div className="controls">
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default ElbowControls;
