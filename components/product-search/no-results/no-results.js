import styles from "./no-results.module.css";

export default function NoResults() {
  return (
    <div className={styles["wrapper"]}>
      <h1>Sorry, your search returned no results.</h1>
    </div>
  );
}
