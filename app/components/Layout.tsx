"use client";

import styles from './layout.module.css'; // Create this CSS module for layout styles
import { ReactNode } from 'react';
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>ShortNest</h1>
        <nav className={styles.headerNav}>
          <a href="/about" className={styles.navLink}>About</a>
          <a href="/search" className={styles.navLink}>Search</a>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main className={styles.mainContent} style={{padding: 0}}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerNav}>
            <button className={styles.navLink}>Locations</button>
            <button className={styles.navLink}>Contact Us</button>
          </div>
          <div className={styles.socialContainer}>
            <span className={styles.footerText}>Follow us on social media</span>
            <div className={styles.socialIcons}>
              {/* Social Media Icons */}
              <a href="#" className={styles.navLink}>
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </a>
              <a href="#" className={styles.navLink}>
                <Image
                  src="/twitter.webp"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </a>
              <a href="#" className={styles.navLink}>
                <Image
                  src="/youtube.webp"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                  />
                  </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
