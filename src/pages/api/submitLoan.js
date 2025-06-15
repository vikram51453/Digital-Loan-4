// File: pages/api/submitLoan.js

import { db } from "@/lib/firebase"; // Adjust path if needed
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, amount, type } = req.body;

  // Validate inputs
  if (!name || !email || !phone || !amount || !type) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  if (isNaN(amount) || Number(amount) <= 0) {
    return res.status(400).json({ error: "Loan amount must be a positive number" });
  }

  try {
    const docRef = await addDoc(collection(db, "loanApplications"), {
      name,
      email,
      phone,
      amount: Number(amount),
      type,
      createdAt: serverTimestamp(),
    });

    return res.status(200).json({
      id: docRef.id,
      message: "Loan application submitted successfully",
    });
  } catch (error) {
    console.error("🔥 Firestore Error:", error.message);
    return res.status(500).json({ error: "Failed to submit loan application" });
  }
}
