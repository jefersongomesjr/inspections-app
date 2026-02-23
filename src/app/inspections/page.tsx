"use client";

import { useEffect, useState } from "react";
import { addInfraction, createInspection, getInspections, finalizeInspection } from "@/services/inspections.service";
import styles from "./page.module.css";
import { Inspection } from "@/types/inspections";
import Card from "@/app/components/organisms/Card";
import { Button } from "@/app/components/atoms/Button";
import { ModalOverlay } from "../components/atoms/Modal";
import { InspectionForm } from "../components/organisms/Forms";
import { InfractionForm } from "../components/organisms/InfractionForm";
import InspectionsLayout from "../components/atoms/InspectionsLayout";

export default function Home() {
  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState("");
  const [inspector, setInspector] = useState("");
  const [modalType, setModalType] = useState<"" | "create" | "concluir" | "irregularidade">("");
  const [selectedInspectionId, setSelectedInspectionId] = useState<string | null>(null);
  const [finalStatus, setFinalStatus] = useState<string>('');
  const [showFinalStatusError, setShowFinalStatusError] = useState<boolean>(false);

  useEffect(() => {
    getInspections().then(setInspections);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newInspection = {
      location,
      inspector,
      date: String(new Date()),
      initial_state: false,
      status: ""
    };
    await createInspection(newInspection);
    const updatedInspections = await getInspections();
    setInspections(updatedInspections);
    setShowModal(false);
  };

  const handleOpenModal = (type: "create" | "concluir" | "irregularidade", inspectionId?: string) => {
    setModalType(type);
    if (inspectionId) {
      setSelectedInspectionId(inspectionId);
    } else {
      setSelectedInspectionId(null);
    }
    setShowModal(true);
  };

  const handleSaveInfraction = async (infractionData: { description: string; severity: string; immediateInterdiction: boolean }) => {
    if (selectedInspectionId) {
      try {
        await addInfraction(selectedInspectionId, infractionData);
        const updatedInspections = await getInspections();
        setInspections(updatedInspections);
      } catch (error) {
        console.error("Error adding infraction:", error);
      }
    } else {
      console.error("No inspection selected to add infraction.");
    }
    setShowModal(false);
  };

  const handleFinishInspection = async (newStatus: string) => {
    if (selectedInspectionId && newStatus) {
      try {
        await finalizeInspection(selectedInspectionId, newStatus);
        const updatedInspections = await getInspections();
        setInspections(updatedInspections);
      } catch (error) {
        console.error("Error finalizing inspection:", error);
      }
    } else {
      console.error("No inspection selected or no final status provided.");
    }
    setShowModal(false);
  };

  return (
    <div className={styles.main}>
      <InspectionsLayout>
        <div className={styles.inspectionHeader}>
          <h3>Todas Inspeções</h3>
          <Button textAction="Criar Nova Inspeção" variant="primary" onClick={() => handleOpenModal('create')} />

        </div>
        {inspections.map((inspection) => (
          <Card key={inspection.id} inspection={inspection} onCardAction={(actionType) => handleOpenModal(actionType, inspection.id)} />
        ))}
        {showModal && (
          <ModalOverlay className={styles.modalOverlay}>
            {modalType === "create" && (
              <InspectionForm
                location={location}
                className={styles.form}
                inspector={inspector}
                setLocation={setLocation}
                setInspector={setInspector}
                onSubmit={handleSubmit}
                onCancel={() => setShowModal(false)} 
              />
            )}

            {modalType === "irregularidade" && (
              <InfractionForm
                className={styles.form}
                onSubmit={handleSaveInfraction}
                onCancel={() => setShowModal(false)}
              />
            )}

            {modalType === "concluir" && (
              <div className={styles.form}>
                <h2>Concluir Inspeção</h2>
                <div>
                  <p>Selecione o Estado final do Estabelecimento:</p>
                  <select
                    value={finalStatus}
                    onChange={(e) => {
                      setFinalStatus(e.target.value);
                      setShowFinalStatusError(false);
                    }}
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px', width: '100%' }}
                    required 
                  >
                    <option value="">Selecione...</option>
                    <option value="Em conformidade">Em conformidade</option>
                    <option value="Pendências">Pendências</option>
                    <option value="Auto de Infração com interdição parcial">Auto de Infração com interdição parcial</option>
                    <option value="Interdição total">Interdição total</option>
                  </select>
                  {showFinalStatusError && finalStatus === "" && (
                    <p style={{ color: 'red', fontSize: '0.85em', marginTop: '-5px' }}>Por favor, selecione um status final.</p>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <Button
                    textAction="Finalizar"
                    variant="primary"
                    onClick={async () => {
                      if (finalStatus === "") {
                        setShowFinalStatusError(true);
                        return;
                      }
                      await handleFinishInspection(finalStatus);
                    }}
                    disabled={!finalStatus}
                  />
                  <Button textAction="Cancelar" variant="secondary" onClick={() => {
                    setShowModal(false);
                    setFinalStatus(''); 
                    setShowFinalStatusError(false);
                  }} />
                </div>
              </div>
            )}
          </ModalOverlay>
        )}
      </InspectionsLayout>
    </div>
  );
}
