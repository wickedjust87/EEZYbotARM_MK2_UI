import arrowLeft from '/arrow-left.svg';
import styles from './ArrowLeft.module.css';
import ArrowIcon from './ArrowIcon';

function ArrowLeft() {
  return (
    <div className={styles.arrowLeft}>
      <ArrowIcon />
    </div>
  );
}

export default ArrowLeft;
