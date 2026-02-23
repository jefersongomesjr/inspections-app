import { Button } from '../../atoms/Button';
import styles from './CardActions.module.css';

type CardActionsProps = {
  onAction: (type: "create" | "concluir" | "irregularidade") => void;
  initialState: boolean;
};

export default function CardActions({ onAction, initialState }: CardActionsProps) {
  return (
    <> 
      {!initialState && (
        <div className={styles.actionsWrapper}>
          <Button textAction="Concluir Inspeção" variant="primary" onClick={() => onAction("concluir")} />
          <Button
            textAction="Registrar Irregularidade"
            variant="tertiary"
            onClick={() => onAction("irregularidade")} />
        </div>
      )}
    </>
  );
}
