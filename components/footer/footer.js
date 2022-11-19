import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles["content-wrap"]}></div>
      <footer className={styles["footer"]}>
        <span>Created by Michael Orwat</span>
      </footer>
    </div>
  );
}
