import Link from 'next/link';

import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <header className={styles.Banner}>
        <nav className={styles.BannerNav}>
          <div><Link href="/dashboard"><a>Dashboard</a></Link></div>
          <div><Link href="/explorer"><a>Explorer</a></Link></div>
          <div><Link href="/reports"><a>Reports</a></Link></div>
        </nav>
      </header>
      <div className={styles.MainContent}>
        {children}
      </div>
    </div>
  );
};