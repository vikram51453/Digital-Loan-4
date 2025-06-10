import { useState, useEffect } from "react";

export default function EmiTracker() {
  const [emis, setEmis] = useState([
    { month: "April", status: "Paid" },
    { month: "May", status: "Paid" },
    { month: "June", status: "Pending" },
  ]);
  const [lastUpdated, setLastUpdated] = useState("");
  const [pendingCount, setPendingCount] = useState(0);

  // Simulate EMI update
  useEffect(() => {
    const timer = setTimeout(() => {
      setEmis((prev) =>
        prev.map((emi) =>
          emi.month === "June" ? { ...emi, status: "Paid" } : emi
        )
      );
      setLastUpdated(new Date().toLocaleString());
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // Recalculate pending EMIs when data changes
  useEffect(() => {
    const count = emis.filter((emi) => emi.status !== "Paid").length;
    setPendingCount(count);
  }, [emis]);

  // Logging for effect tracking
  useEffect(() => {
    console.log("EMI Tracker initialized or updated.");
  }, []);

  return (
    <div className="bg-white rounded shadow-md p-6 mt-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">EMI Status</h2>
      <ul className="space-y-2">
        {emis.map((emi) => (
          <li key={emi.month} className="flex justify-between">
            <span>{emi.month}</span>
            <span
              className={`font-semibold ${
                emi.status === "Paid" ? "text-green-600" : "text-red-600"
              }`}
            >
              {emi.status}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-gray-600">
        <strong>Pending EMIs:</strong> {pendingCount}
      </p>
      <p className="text-sm text-gray-400 mt-1">Last Updated: {lastUpdated}</p>
    </div>
  );
}
