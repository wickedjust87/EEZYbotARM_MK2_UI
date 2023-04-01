import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import './BaseControls.css';
import './Controls.css';

function BaseControls() {
  return (
    <div className="baseControls">
      <div className="controls">
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default BaseControls;
