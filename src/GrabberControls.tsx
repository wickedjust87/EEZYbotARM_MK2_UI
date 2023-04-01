import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import styles from './Controls.module.css';

function GrabberControls() {
  return (
    <div>
      Grabber
      <div className={styles.controls}>
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default GrabberControls;
