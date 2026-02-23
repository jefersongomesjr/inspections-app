import { Button } from '../../atoms/Button';

type CardActionsProps = {
  onAction: (type: "create" | "concluir" | "irregularidade") => void;
  initialState: boolean;
};

export default function CardActions({ onAction, initialState }: CardActionsProps) {
  return (
    <div >
      <Button textAction="Concluir Inspeção" variant="primary" onClick={() => onAction("concluir")} />
      {!initialState && (
        <Button
          textAction="Registrar Irregularidade"
          variant="tertiary"
          onClick={() => onAction("irregularidade")} />
      )
      }
    </div>
  );
}
