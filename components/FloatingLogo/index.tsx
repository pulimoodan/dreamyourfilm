import Image from "next/image";
import styles from "./FloatingLogo.module.scss";

export default function FloatingLogo() {
  return (
    <div className={styles.floating_logo}>
      <Image src="/assets/logo.svg" alt="logo" width={100} height={150} />
    </div>
  );
}
