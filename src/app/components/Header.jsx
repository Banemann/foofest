import Link from "next/link";
import Image from "next/image";
import styles from './Header.module.css';

const Header = () => {
  return (
    <main className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.link}>
            <Link prefetch={false} href="/">
              <Image src="/diversa.svg" alt="Logo" className={styles.logo} width={100} height={100} priority />
            </Link>
          </li>
          <li className={styles.link}>
            <Link prefetch={false} className={styles.link} href="/rules">
              Rules
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Header;