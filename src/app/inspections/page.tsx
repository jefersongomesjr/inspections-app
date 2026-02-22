"use client";

import { useEffect, useState } from "react";
import { getInspections } from "@/services/inspections.service";
import styles from "./page.module.css";
import { Inspection } from "@/types/inspections";


export default function InspectionsPage() {
  const [inspections, setInspections] = useState<Inspection[]>([]);

  useEffect(() => {
    getInspections().then(setInspections);
  }, []);
    
  return (
    <div className={styles.page}>
      {inspections.map((inspection) => (
        <div key={inspection.id}>
          <h2>{inspection.location}</h2>
          <p>{inspection.inspector}</p>
          <p>{inspection.date}</p>
          <p>{inspection.initial_state}</p>
          <p>{inspection.status}</p>
        </div>
      ))}
    </div>
  );
}
