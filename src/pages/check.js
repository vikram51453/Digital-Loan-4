import { useState } from "react";

export default function CheckLoan() {
  const [id, setId] = useState("");
  const [loan, setLoan] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    setLoan(null);
    setError("");
    if (!id.trim()) {
      setError("Please enter a valid Application ID.");
      return;
    }

    try {
      const res = await fetch(`/api/getLoan?id=${id}`);
      const data = await res.json();

      if (res.ok) {
        setLoan(data);
        setError("");
      } else {
        setError(data.error || "Loan not found.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Check Application Details</h2>

        <div className="flex gap-2">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter Application ID"
            className="flex-grow border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCheck}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Check
          </button>
        </div>

        {error && <p className="text-red-600 mt-4 font-semibold">{error}</p>}

        {loan && (
          <div className="mt-6 bg-gray-50 p-5 rounded shadow-inner">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Loan Application Summary</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Name:</strong> {loan.name}</p>
              <p><strong>Email:</strong> {loan.email}</p>
              <p><strong>Phone:</strong> {loan.phone}</p>
              <p><strong>Amount:</strong> ₹{loan.amount}</p>
              <p><strong>Loan Type:</strong> {loan.type}</p>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
}