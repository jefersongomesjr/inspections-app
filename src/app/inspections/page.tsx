"use client";

import { useEffect, useState } from "react";
import { getInspections } from "@/services/inspections.service";
import styles from "./page.module.css";
import { Inspection } from "@/types/inspections";
import Card from "@/app/components/organisms/Card";

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
      </section>

    </div>
  );
}
