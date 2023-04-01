import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import styles from './Controls.module.css';

function ElbowControls() {
  return (
    <div>
      Elbow
      <div className={styles.controls}>
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default ElbowControls;
