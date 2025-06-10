// File: pages/apply.js

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Apply() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
    // Here you can integrate your backend API or Firebase, etc.
  };

  return (
    <>
      <Head>
        <title>Apply for Loan | Flexi Loaner</title>
      </Head>
      <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Loan Application Form</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="number"
              name="amount"
              placeholder="Loan Amount"
              value={form.amount}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              name="reason"
              rows="4"
              placeholder="Reason for Loan"
              value={form.reason}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700"
            >
              Submit Application
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/" className="text-blue-500 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
