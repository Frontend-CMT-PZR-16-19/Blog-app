import styles from "./layout.module.css";

export default function BlogLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
