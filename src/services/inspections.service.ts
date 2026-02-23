import { Inspection, Infraction } from "@/types/inspections";

const API_URL = "http://localhost:3001/inspections";

export async function getInspections() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erro ao buscar inspeções");
  return res.json();
}

export async function createInspection(data: Inspection) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Erro ao criar inspeção");
  return res.json();
}

export async function addInfraction(inspectionId: string, infractionData: { description: string; severity: string; immediateInterdiction: boolean }) {
  const getRes = await fetch(`${API_URL}/${inspectionId}`);
  if (!getRes.ok) {
    throw new Error(`Erro ao buscar inspeção com ID ${inspectionId}`);
  }
  const inspection: Inspection = await getRes.json();

  const currentInfractions = inspection.infractions || [];

  const newInfraction: Infraction = {
    id: String(Date.now()),
    ...infractionData,
    inspectionId: inspectionId,
  };

  const updatedInspection = {
    ...inspection,
    infractions: [...currentInfractions, newInfraction]
  };

  const patchRes = await fetch(`${API_URL}/${inspectionId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedInspection)
  });

  if (!patchRes.ok) {
    throw new Error(`Erro ao adicionar infração à inspeção ${inspectionId}`);
  }
  
  return updatedInspection;
}