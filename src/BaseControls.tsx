import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import baseControlStyles from './BaseControls.module.css';
import controlsStyles from './Controls.module.css';

function BaseControls() {
  return (
    <div className={baseControlStyles.baseControls}>
      <div className={controlsStyles.controls}>
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default BaseControls;
