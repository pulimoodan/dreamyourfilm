import styles from "./Links.module.scss";

export default function Links({ active }) {
  return (
    <ul className={styles.links}>
      <li className={`${active == "home" && styles.active}`}>
        <a href="/">Home</a>
      </li>
      <li className={`${active == "learnmore" && styles.active}`}>
        <a href="/about">Learn more</a>
      </li>
      <li className={`${active == "terms" && styles.active}`}>
        <a
          target="_blank"
          href="https://www.termsandcondiitionssample.com/live.php?token=Mj8QPSYWDoaaAz4cdcWckSGl6uKmaLL7"
        >
          Terms & conditions
        </a>
      </li>
      <li className={`${active == "policy" && styles.active}`}>
        <a
          target="_blank"
          href="https://www.privacypolicygenerator.info/live.php?token=fMMCrkPVUQslrY44PdAS3rQfcvSTnBGy"
        >
          Privacy policy
        </a>
      </li>
      <li className={`${active == "contact" && styles.active}`}>
        <a href="mailto:info@dreamyourfilm.com">Contact us</a>
      </li>
    </ul>
  );
}
