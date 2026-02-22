import React from 'react';
import { Inspection } from '@/types/inspections';
import styles from './Card.module.css';

interface CardProps {
  inspection: Inspection;
}

export default function Card({ inspection }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{inspection.location}</h2>
      <p><strong>Inspector:</strong> {inspection.inspector}</p>
      <p><strong>Date:</strong> {inspection.date}</p>
      <p><strong>Initial State:</strong> {inspection.initial_state}</p>
      <p><strong>Status:</strong> {inspection.status}</p>
    </div>
  );
}