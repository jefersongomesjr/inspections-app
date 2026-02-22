import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Sistema de Fiscalização</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png"
       className={styles.avatar} />
    </header>
  );
}
