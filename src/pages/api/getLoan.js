import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { id } = req.query;

  try {
    const docRef = doc(db, "loanApplications", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.status(200).json({ id, ...docSnap.data() });
    } else {
      res.status(404).json({ error: "Loan not found" });
    }
  } catch (error) {
    console.error("Error fetching loan:", error);
    res.status(500).json({ error: "Failed to fetch loan application" });
  }
}
