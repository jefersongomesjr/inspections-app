import React, { useState } from 'react';
import { Button } from '@/app/components/atoms/Button';
import { FormField } from '../../molecules/FormField';

type InfractionFormProps = {
  onSubmit: (infractionData: { description: string; severity: string; immediateInterdiction: boolean }) => void;
  onCancel: () => void;
  className?: string;
  initialData?: { description: string; severity: string; immediateInterdiction: boolean };
}

export function InfractionForm({ onSubmit, onCancel, className, initialData }: InfractionFormProps) {
  const [description, setDescription] = useState(initialData?.description || '');
  const [severity, setSeverity] = useState(initialData?.severity || '');
  const [immediateInterdiction, setImmediateInterdiction] = useState(initialData?.immediateInterdiction || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ description, severity, immediateInterdiction });
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <h2>Registrar Irregularidade</h2>
      <div style={{ width: '95%' }}>
        <FormField
          id="infractionDescription"
          label="Descrição da Infração"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descreva a natureza da infração..."
          required={true}
        />

        <FormField
          id="infractionSeverity"
          label="Gravidade"
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          placeholder="Ex: Baixa, Média, Alta"
          required={true}
        />
      </div>

      <label htmlFor="immediateInterdiction" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Exige Interdição Imediata?
        <input
          id="immediateInterdiction"
          type="checkbox"
          checked={immediateInterdiction}
          onChange={(e) => setImmediateInterdiction(e.target.checked)}
        />
      </label>
      <div>
        <Button type="submit" textAction="Salvar Infração" variant="primary" disabled={!description || !severity} />
        <Button type="button" textAction="Cancelar" variant="secondary" onClick={onCancel} />
      </div>
    </form>
  );
}
