import styles from './Arrow.module.css';
import ArrowIcon from './ArrowIcon';

function ArrowLeft() {
  return (
    <button className={`${styles.arrow} ${styles.left}`}>
      <ArrowIcon />
    </button>
  );
}

export default ArrowLeft;
