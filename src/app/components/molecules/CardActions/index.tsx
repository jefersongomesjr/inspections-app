import styles from './CardActions.module.css';
import { Button } from '../../atoms/Button';


export default function CardActions({onAction }: {onAction: (actionType: "concluir" | "irregularidade") => void}) {
  return (
    <div className={styles.cardActions}>
      <Button textAction="Concluir Inspeção" variant="primary" onClick={() => onAction("concluir")} />
      <Button textAction="Registrar Irregularidade" variant="tertiary" onClick={() => onAction("irregularidade")} />
    </div>
  );
}
