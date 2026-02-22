import React from 'react';
import { Inspection } from '@/types/inspections';
import styles from './Card.module.css';

interface CardProps {
  inspection: Inspection;
  setShowModal: (showModal: boolean) => void;
}

export default function Card({ inspection, setShowModal }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{inspection.location}</h2>
      <p><strong>Inspector:</strong> {inspection.inspector}</p>
      <p><strong>Date:</strong> {inspection.date}</p>
      <p><strong>Initial State:</strong> {inspection.status ? 'Em Andamento' : 'Concluído'}</p>
      {inspection.status && <p><strong>Status:</strong> {inspection.status}</p>}
      <div> 
        <button onClick={() => setShowModal(true)}>Criar Nova Inspeção</button>
        <button>Editar</button>
      </div>
    </div>
  );
}