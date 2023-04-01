import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import styles from './Controls.module.css';

function ShoulderControls() {
  return (
    <div>
      Shoulder
      <div className={styles.controls}>
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default ShoulderControls;
