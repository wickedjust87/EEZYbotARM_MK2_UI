import styles from './ArrowIcon.module.css';

function ArrowIcon() {
  return (
    <svg className={styles.icon} enable-background="new 0 0 64 64" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
      <path d="m9.374 54.627c6.043 6.044 14.079 9.373 22.626 9.373 1.104 0 2-.896 2-2s-.896-2-2-2c-7.479 0-14.51-2.913-19.798-8.202-5.289-5.288-8.202-12.319-8.202-19.798 0-7.381 2.842-14.323 8-19.587v5.587c0 1.104.896 2 2 2s2-.896 2-2v-12h-12c-1.104 0-2 .896-2 2s.896 2 2 2h4.776c-5.661 5.968-8.776 13.743-8.776 22 0 8.547 3.329 16.583 9.374 22.627z"/>
    </svg>
  );
}

export default ArrowIcon;
