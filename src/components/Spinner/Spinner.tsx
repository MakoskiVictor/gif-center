import styles from './spinner.module.css'

export const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.SpinnerText}>Ups, seems like nothing is here!</p>
    </div>
  );
};
