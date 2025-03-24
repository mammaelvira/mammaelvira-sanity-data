import "dotenv/config"; // Carica le variabili d'ambiente dal file .env
import { createClient } from "@sanity/client";
import type { VercelRequest, VercelResponse } from "@vercel/node"; // Rimuovi se non usi Vercel

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "", 
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-01",
  token: process.env.SANITY_SECRET_TOKEN || "", 
});

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { user, email, phone } = req.body;

  if (!user || (!email && !phone)) {
    return res.status(400).json({ message: "Inserisci almeno Nome e Cognome e un contatto" });
  }

  try {
    await client.create({
      _type: "contact",
      user,
      email: email || "",
      phone: phone || "",
    });

    return res.status(200).json({ message: "Dati salvati con successo!" });
  } catch (error) {
    console.error("Errore nel salvataggio:", error);
    return res.status(500).json({ message: "Errore interno del server" });
  }
};
