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
}
export const InspectionForm = ({
  location,
  className,
  inspector,
  setLocation,
  setInspector,
  onSubmit,
  submitLabel = "Salvar"
}: InspectionFormProps) => (
  <form onSubmit={onSubmit} className={className}>
    <h2>Adicionar Nova Inspeção</h2>
    <div style={{width: '80%'}}>
      <FormField
        id="location"
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Digite a localização"
      />
      <FormField
        id="inspector"
        label="Inspector"
        value={inspector}
        onChange={(e) => setInspector(e.target.value)}
        placeholder="Digite o inspetor"
      />
    </div>

    <Button type="submit" variant="secondary" textAction={submitLabel} onClick={() => { }} />
  </form>
);