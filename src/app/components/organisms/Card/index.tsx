import React from 'react';
import { Inspection } from '@/types/inspections';
import styles from './Card.module.css';
import CardContent from '@/app/components/molecules/CardContent';
import CardActions from '@/app/components/molecules/CardActions';
import Link from 'next/link';

type CardProps = {
  inspection: Inspection;
  onCardAction: (actionType: "create" | "concluir" | "irregularidade", inspectionId?: string) => void;
}

export default function Card({ inspection, onCardAction }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{inspection.location}</h2>
      <CardContent inspection={inspection} />
      <CardActions
        initialState={inspection.initial_state}
        onAction={(actionType) => onCardAction(actionType, inspection.id)} 
      />
      <div style={{ marginTop: '10px' }}>
        <Link href={`/inspections/${inspection.id}`} className={styles.detailsLink}>
          Ver mais detalhes
        </Link>
      </div>
    </div>
  );
}