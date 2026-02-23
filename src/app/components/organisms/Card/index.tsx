import React from 'react';
import { Inspection } from '@/types/inspections';
import styles from './Card.module.css';
import CardContent from '@/app/components/molecules/CardContent';
import CardActions from '@/app/components/molecules/CardActions';

type CardProps = {
  inspection: Inspection;
  onCardAction: (actionType: "create" | "concluir" | "irregularidade") => void;
}

export default function Card({ inspection, onCardAction }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{inspection.location}</h2>
      <CardContent inspection={inspection} />
      <CardActions onAction={(actionType) => onCardAction(actionType)} />
    </div>
  );
}