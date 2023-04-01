import './GrabberControls.css';
import './Controls.css';
import ArrowRelease from "./ArrowRelease";
import ArrowGrab from './ArrowGrab';

function GrabberControls() {
  return (
    <div className="grabberControls">
      <div className="controls">
        <ArrowRelease />
        <ArrowGrab />
      </div>
    </div>
  );
}

export default GrabberControls;
