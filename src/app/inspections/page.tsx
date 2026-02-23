"use client";

import { useEffect, useState } from "react";
import { createInspection, getInspections } from "@/services/inspections.service";
import styles from "./page.module.css";
import { Inspection } from "@/types/inspections";
import Card from "@/app/components/organisms/Card";
import { Button } from "@/app/components/atoms/Button";
import { ModalOverlay } from "../components/atoms/Modal";
import { InspectionForm } from "../components/organisms/Forms";

export default function Home() {
  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState("");
  const [inspector, setInspector] = useState("");
  const [modalType, setModalType] = useState<"" | "create" | "concluir" | "irregularidade">("");

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

const handleOpenModal = (type: "create" | "concluir" | "irregularidade") => {
  setModalType(type);
  setShowModal(true);
};

  return (
    <div className={styles.main}>
      <section className={styles.inspectionContainer} >
        <div className={styles.inspectionHeader}>
          <h3>Todas Inspeções</h3>
          <Button textAction="Criar Nova Inspeção" variant="primary" onClick={() => handleOpenModal('create')} />

        </div>
        {inspections.map((inspection) => (
          <Card key={inspection.id} inspection={inspection} onCardAction={handleOpenModal} />
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
              <div>
                <h2>Editar Inspeção</h2>
              </div>
            )}
          </ModalOverlay>
        )}
      </section>

    </div>
  );
}
