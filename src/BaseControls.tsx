import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import styles from './Controls.module.css';

function BaseControls() {
  return (
    <div>
      Base
      <div className={styles.controls}>
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}

export default BaseControls;
