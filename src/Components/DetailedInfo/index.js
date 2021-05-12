import styles from "./index.module.css";
import SearchBar from "../SearchBar";

export default function DetailedInfo() {
  return (
    <div className={styles.component}>
      <p className={styles.description}>
        Looking for a light travel companion? Or maybe an easy going dog? Use
        these filters to find your ideal pal!
      </p>
      <div className={styles.options}>
        <SearchBar />
      </div>
    </div>
  );
}
