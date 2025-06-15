import { useState } from "react";
import { useRouter } from "next/router";

export default function Apply() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    type: "",
  });
  const [submittedId, setSubmittedId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/submitLoan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setSubmittedId(data.id);
      alert("✅ Loan Submitted! Your Application ID is: " + data.id);
      setForm({ name: "", email: "", phone: "", amount: "", type: "" });
    } else {
      alert("❌ Error: " + data.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded shadow">
        <h2 className="text-center text-3xl font-bold text-blue-700">Apply for a Loan</h2>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="mt-1 w-full border p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="mt-1 w-full border p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
              placeholder="10-digit mobile number"
              className="mt-1 w-full border p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Amount */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Loan Amount (₹)</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={form.amount}
              onChange={handleChange}
              required
              min={1000}
              placeholder="Enter loan amount"
              className="mt-1 w-full border p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Loan Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Loan Type</label>
            <select
              name="type"
              id="type"
              value={form.type}
              onChange={handleChange}
              required
              className="mt-1 w-full border p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select Loan Type --</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Education Loan">Education Loan</option>
              <option value="Vehicle Loan">Vehicle Loan</option>
              <option value="Business Loan">Business Loan</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
          >
            Submit Application
          </button>
        </form>

        {submittedId && (
          <div className="mt-6 text-center bg-green-100 text-green-800 p-3 rounded shadow space-y-2">
            <p>✅ Application submitted successfully!</p>
            <p><strong>Your ID:</strong> {submittedId}</p>
            <button
              onClick={() => router.push("/")}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow"
            >
              ⬅ Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
