import { TextWithLabel } from '../../atoms/TextWithLabel';
import { Inspection } from '@/types/inspections';
import styles from './CardContent.module.css';


export default function CardContent({ inspection }: { inspection: Inspection }) {

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  return (
    <div className={styles.cardContent}>
      <div style={{ display: "flex", justifyContent: 'space-around', width: "100%" }}>
        <TextWithLabel label="Inspetor" textContent={inspection.inspector} />
        <TextWithLabel label="Data" textContent={formatDate(inspection.date)} />
        <TextWithLabel label="Estado da Inspeção" textContent={!inspection.status ? 'Em Andamento' : 'Concluído'} />
      </div>

      {(inspection.initial_state && inspection.status) && (
        <TextWithLabel
          label="Estado da Estabelecimento"
          textContent={inspection.status}
          className={styles.statusLine}
        />)}
    </div>
  );
}
