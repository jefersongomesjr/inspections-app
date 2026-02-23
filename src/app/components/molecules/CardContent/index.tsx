import React from 'react';
import { TextWithLabel } from '../../atoms/TextWithLabel';
import { Inspection } from '@/types/inspections';
import styles from './CardContent.module.css';


export default function CardContent({ inspection }: { inspection: Inspection }) {
  return (
    <div className={styles.cardContent}>
      <div style={{display: "flex", justifyContent:'space-around', width: "100%"}}>
          <TextWithLabel label="Inspector" textContent={inspection.inspector} />
          <TextWithLabel label="Date" textContent={inspection.date} />
          <TextWithLabel label="Initial State" textContent={inspection.status ? 'Em Andamento' : 'Concluído'} />
      </div>

      {inspection.status && (
        <TextWithLabel 
          label="Status" 
          textContent={inspection.status} 
          className={styles.statusLine}
          />)}
    </div>
  );
}
