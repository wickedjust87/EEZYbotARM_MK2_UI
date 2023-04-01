import arrowLeft from '/arrow-left.svg';
import styles from './ArrowLeft.module.css';

function ArrowLeft() {
  return (
    <img className={styles.arrowLeft} src={arrowLeft} alt="arrow left" />
  );
}

export default ArrowLeft;
