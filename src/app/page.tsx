// Home.jsx

import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={styles.contentContainer}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.link}>
              <Link prefetch={false} href="/program">
                <div>
                  <Image src="/logos/1280px-RefusedWayOutWest.jpg" alt="Program Image" width={600} height={300} />
                  <span>Program</span>
                </div>
              </Link>
            </li>
            <li className={styles.link}>
              <Link prefetch={false} href="/billetter">
                <div>
                  <Image src="/images/tickets2.jpg" alt="Billetter Image" width={600} height={300} />
                  <span>Billetter</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
