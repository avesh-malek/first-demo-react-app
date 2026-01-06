import styles from "./Container.module.css";
function Container({ children }) {
  return <div className={styles.cont}>{children}</div>;
}
export default Container;
