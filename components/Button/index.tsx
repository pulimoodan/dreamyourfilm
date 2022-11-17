import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({ children, link }) {
  return (
    <Link href={link} className={styles.btn} onClick={() => console.log(1)}>
      {children}
    </Link>
  );
}
