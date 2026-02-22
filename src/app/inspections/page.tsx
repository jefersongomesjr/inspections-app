"use client";

import { useEffect, useState } from "react";
import { getInspections } from "@/services/inspections.service";
import styles from "./page.module.css";
import { Inspection } from "@/types/inspections";
import Card from "@/app/components/organisms/Card";
import { ModalOverlay } from "../components/atoms/Modal";

export default function Home() {
  const [inspections, setInspections] = useState<Inspection[]>([]);

  useEffect(() => {
    getInspections().then(setInspections);
  }, []);
    
  return (
    <div className={styles.main}>
      <section className={styles.inspectionContainer} >
            {inspections.map((inspection) => (
        <Card key={inspection.id} inspection={inspection} />
      ))}
      <ModalOverlay className={styles.modalOverlay}>
          <form className={styles.form}>
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Inspector" />
            <input type="text" placeholder="Date" />
            <input type="text" placeholder="Initial State" />
          </form>
      </ModalOverlay>
      </section>

    </div>
  );
}
