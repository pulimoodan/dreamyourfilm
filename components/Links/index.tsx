import Link from "next/link";
import styles from "./Links.module.scss";

export default function Links({ active }) {
  return (
    <ul className={styles.links}>
      <li className={`${active == "home" && styles.active}`}>
        <Link href="/">Home</Link>
      </li>
      <li className={`${active == "learnmore" && styles.active}`}>
        <Link href="/about">Learn more</Link>
      </li>
      <li className={`${active == "terms" && styles.active}`}>
        <Link
          target="_blank"
          href="https://www.termsandcondiitionssample.com/live.php?token=Mj8QPSYWDoaaAz4cdcWckSGl6uKmaLL7"
        >
          Terms & conditions
        </Link>
      </li>
      <li className={`${active == "policy" && styles.active}`}>
        <Link
          target="_blank"
          href="https://www.privacypolicygenerator.info/live.php?token=fMMCrkPVUQslrY44PdAS3rQfcvSTnBGy"
        >
          Privacy policy
        </Link>
      </li>
      <li className={`${active == "contact" && styles.active}`}>
        <Link href="mailto:info@dreamyourfilm.com">Contact us</Link>
      </li>
    </ul>
  );
}
