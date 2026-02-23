import React from 'react';
import { Inspection } from '@/types/inspections';
import styles from './Card.module.css';
import CardContent from '../../molecules/CardContent';
import CardActions from '../../molecules/CardActions';

interface CardProps {
  inspection: Inspection;
  setShowModal: (showModal: boolean) => void;
}

export default function Card({ inspection, setShowModal }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{inspection.location}</h2>
      <CardContent inspection={inspection} />
      <CardActions onClick={() => setShowModal(true)} />
    </div>
  );
}