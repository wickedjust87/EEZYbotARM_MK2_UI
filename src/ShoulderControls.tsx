import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import shoulderControlStyles from './ShoulderControls.module.css';
import controlsStyles from './Controls.module.css';

function ShoulderControls() {
  return (
    <div className={shoulderControlStyles.shoulderControls}>
      <div className={controlsStyles.controls}>
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default ShoulderControls;
