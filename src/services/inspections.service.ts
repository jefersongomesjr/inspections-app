import { Inspection } from "@/types/inspections";

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
