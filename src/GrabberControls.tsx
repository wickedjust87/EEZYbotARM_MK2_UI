import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import grabberControlStyles from './GrabberControls.module.css';
import controlsStyles from './Controls.module.css';

function GrabberControls() {
  return (
    <div className={grabberControlStyles.grabberControls}>
      <div className={controlsStyles.controls}>
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default GrabberControls;
