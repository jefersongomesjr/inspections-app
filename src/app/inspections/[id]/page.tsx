"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getInspections } from "@/services/inspections.service";
import { Inspection, Infraction } from "@/types/inspections";
import styles from "./page.module.css";
import CardContent from "@/app/components/molecules/CardContent";
import { Button } from "@/app/components/atoms/Button";
import InspectionsLayout from "@/app/components/atoms/InspectionsLayout";

export default function InspectionsDetailPage() {
  const router = useRouter();
  const params = useParams();
  const inspectionId = params.id as string;
  const [inspection, setInspection] = useState<Inspection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInspection = async () => {
      try {
        setLoading(true);
        const allInspections = await getInspections();
        const foundInspection = allInspections.find(
          (insp) => insp.id === inspectionId
        );
        if (foundInspection) {
          setInspection(foundInspection);
        } else {
          setError("Inspeção não encontrada.");
        }
      } catch (err) {
        setError("Erro ao carregar os detalhes da inspeção.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (inspectionId) {
      fetchInspection();
    }
  }, [inspectionId]);

  if (loading) {
    return (
      <InspectionsLayout>
        <p>Carregando detalhes da inspeção...</p>
      </InspectionsLayout>
    );
  }

  if (error) {
    return (
      <InspectionsLayout>
        <p style={{ color: "red" }}>{error}</p>
        <Button textAction="Voltar" variant="secondary" onClick={() => router.push("/inspections")} />
      </InspectionsLayout>
    );
  }

  if (!inspection) {
    return (
      <InspectionsLayout>
        <p>Nenhuma inspeção selecionada.</p>
        <Button textAction="Voltar" variant="secondary" onClick={() => router.push("/inspections")} />
      </InspectionsLayout>
    );
  }

  return (
  <div className={styles.main}>

    <InspectionsLayout>
      <div className={styles.detailCard}>
        <h2>Detalhes da Inspeção</h2>
        <CardContent inspection={inspection} />

        <h3>Infrações Registradas:</h3>
        {inspection.infractions && inspection.infractions.length > 0 ? (
          <ul className={styles.infractionsList}>
            {inspection.infractions.map((infraction: Infraction) => (
              <li key={infraction.id} className={styles.infractionItem}>
                <p><strong>Descrição:</strong> {infraction.description}</p>
                <p><strong>Gravidade:</strong> {infraction.severity}</p>
                <p><strong>Interdição Imediata:</strong> {infraction.immediateInterdiction ? "Sim" : "Não"}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma infração registrada para esta inspeção.</p>
        )}
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button textAction="Voltar" variant="primary" onClick={() => router.push("/inspections")} />
      </div>
    </InspectionsLayout>
    </div>
  );
}
