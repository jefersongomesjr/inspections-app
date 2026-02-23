import React from 'react';
import styles from './InspectionsLayout.module.css';

type InspectionsLayoutProps = {
  children: React.ReactNode;
};

export default function InspectionsLayout({ children }: InspectionsLayoutProps) {
  return (
    <section className={styles.inspectionContainer}>
      {children}
    </section>
  );
}