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

  return (
    <div className={styles.main}>
      <section className={styles.inspectionContainer} >
        <div className={styles.inspectionHeader}>
          <h3>Todas Inspeções</h3>
          <Button textAction="Criar Nova Inspeção" variant="primary" onClick={() => setShowModal(true)} />

        </div>
        {inspections.map((inspection) => (
          <Card key={inspection.id} inspection={inspection} setShowModal={() => console.log("setShowModal")} />
        ))}
        {showModal &&
          <ModalOverlay className={styles.modalOverlay}>
              <InspectionForm
                className={styles.form}
                location={location} 
                inspector={inspector} 
                setLocation={setLocation} 
                setInspector={setInspector} 
                onSubmit={handleSubmit} />
          </ModalOverlay>}
      </section>

    </div>
  );
}
