import { useState, useEffect } from "react";

export default function LoanSummary() {
  const [loanAmount, setLoanAmount] = useState(150000);
  const [paidAmount, setPaidAmount] = useState(75000);
  const [nextEmiDate, setNextEmiDate] = useState("");
  const [remainingMonths, setRemainingMonths] = useState(0);
  const [interestRate, setInterestRate] = useState(10); // static for now

  // Set next EMI date
  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    setNextEmiDate(date.toLocaleDateString());
  }, []);

  // Calculate remaining EMIs
  useEffect(() => {
    const remaining = (loanAmount - paidAmount) / 12500; // flat EMI
    setRemainingMonths(Math.ceil(remaining));
  }, [loanAmount, paidAmount]);

  // Log when values are updated
  useEffect(() => {
    console.log("Loan values updated:", { loanAmount, paidAmount });
  }, [loanAmount, paidAmount]);

  return (
    <div className="bg-white rounded shadow-md p-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Loan Summary</h2>
      <p><strong>Total Loan Amount:</strong> ₹{loanAmount}</p>
      <p><strong>Amount Paid:</strong> ₹{paidAmount}</p>
      <p><strong>Outstanding:</strong> ₹{loanAmount - paidAmount}</p>
      <p><strong>Interest Rate:</strong> {interestRate}%</p>
      <p><strong>Next EMI Date:</strong> {nextEmiDate}</p>
      <p><strong>Remaining EMIs:</strong> {remainingMonths} months</p>
    </div>
  );
}
