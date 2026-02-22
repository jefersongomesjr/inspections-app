const API_URL = "http://localhost:3001/inspections";

export async function getInspections() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erro ao buscar inspeções");
  return res.json();
}
