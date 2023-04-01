import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import elbowControlStyles from './ElbowControls.module.css';
import controlsStyles from './Controls.module.css';

function ElbowControls() {
  return (
    <div className={elbowControlStyles.elbowControls}>
      <div className={controlsStyles.controls}>
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default ElbowControls;
