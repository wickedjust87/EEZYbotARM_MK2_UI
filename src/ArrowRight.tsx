import styles from './Arrow.module.css';
import ArrowIcon from './ArrowIcon';

function ArrowRight() {
  return (
    <button className={`${styles.arrow} ${styles.right}`}>
      <ArrowIcon />
    </button>
  );
}

export default ArrowRight;
