import { FormField } from "@/app/components/molecules/FormField";
import { Button } from "@/app/components/atoms/Button";

type InspectionFormProps = {
  location: string;
  className?: string
  inspector: string;
  setLocation: (location: string) => void;
  setInspector: (inspector: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitLabel?: string;
  onCancel?: () => void;
}
export const InspectionForm = ({
  location,
  className,
  inspector,
  setLocation,
  setInspector,
  onSubmit,
  submitLabel = "Salvar",
  onCancel
}: InspectionFormProps) => (
  <form onSubmit={onSubmit} className={className}>
    <h2>Adicionar Nova Inspeção</h2>
    <div style={{width: '80%'}}>
      <FormField
        id="location"
        label="Estabelecimento"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Digite o nome do Estabelecimento"
        required={true}
      />
      <FormField
        id="inspector"
        label="Inspetor"
        value={inspector}
        onChange={(e) => setInspector(e.target.value)}
        placeholder="Digite o inspetor"
        required={true}
      />
    </div>

    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}> 
      <Button type="submit" variant="primary" textAction={submitLabel} />
      {onCancel && <Button type="button" variant="secondary" textAction="Cancelar" onClick={onCancel} />}
    </div>
  </form>
);