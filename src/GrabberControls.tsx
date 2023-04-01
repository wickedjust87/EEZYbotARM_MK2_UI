import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import './GrabberControls.css';
import './Controls.css';

function GrabberControls() {
  return (
    <div className="grabberControls">
      <div className="controls">
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default GrabberControls;
