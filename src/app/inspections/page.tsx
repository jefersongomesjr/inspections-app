"use client";

import { useEffect, useState } from "react";
import { addInfraction, createInspection, getInspections } from "@/services/inspections.service";
import styles from "./page.module.css";
import { Inspection } from "@/types/inspections";
import Card from "@/app/components/organisms/Card";
import { Button } from "@/app/components/atoms/Button";
import { ModalOverlay } from "../components/atoms/Modal";
import { InspectionForm } from "../components/organisms/Forms";
import { InfractionForm } from "../components/organisms/InfractionForm";

export default function Home() {
  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState("");
  const [inspector, setInspector] = useState("");
  const [modalType, setModalType] = useState<"" | "create" | "concluir" | "irregularidade">("");
  const [selectedInspectionId, setSelectedInspectionId] = useState<string | null>(null);

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

  return (
    <div className={styles.main}>
      <section className={styles.inspectionContainer} >
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
              <div>
                <h2>Concluir Inspeção</h2>
                <Button textAction="Fechar" variant="secondary" onClick={() => setShowModal(false)} />
              </div>
            )}
          </ModalOverlay>
        )}
      </section>

    </div>
  );
}
