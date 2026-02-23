import styles from './CardActions.module.css';
import { Button } from '../../atoms/Button';


export default function CardActions({onClick }: {onClick: () => void}) {
  return (
    <div className={styles.cardActions}>
        <Button textAction="Concluir Inspeção" variant="primary" onClick={onClick} />
        <Button textAction="Registar Irregularidade" variant="primary" onClick={onClick} />

    </div>
  );
}
