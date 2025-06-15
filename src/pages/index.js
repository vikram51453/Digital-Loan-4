import Image from "next/image";
import dynamic from "next/dynamic";

const LoanSummary = dynamic(() => import("@/components/LoanSummary"), { ssr: false });
const EmiTracker = dynamic(() => import("@/components/EmiTracker"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-700">Flexi Loaner</div>
          <ul className="flex gap-6 text-sm font-medium text-gray-700 items-center">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#features" className="hover:text-blue-600">Features</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#contact" className="hover:text-indigo-600 font-semibold">Contact</a></li>
            <li>
              <a href="/apply" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Apply Now
              </a>
            </li>
            <li>
              <a href="flexi-ai" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Ask AI
              </a>
            </li>
            <li>
              <a href="/login" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Banner */}
      <section id="home" className="relative">
        <div className="w-full h-[300px] relative">
          <Image
            src="/banner.jpg"
            alt="Loan Management Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Manage Loans & EMIs Effortlessly</h1>
            <p className="mb-4 text-lg">Your trusted partner in seamless digital loan and EMI tracking.</p>
            <a href="/login" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold">Get Started</a>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto space-y-8">
          <LoanSummary />
          <EmiTracker />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["Easy Loan Application", "Apply for loans quickly with simple online forms."],
              ["EMI Tracking", "Track your EMIs, due dates, and payment status."],
              ["Multiple Payment Methods", "Pay using cards, UPI, wallets, or banking."],
              ["Repayment History", "View and download your full repayment records."],
              ["Admin Oversight", "Admins can monitor loans, users, and payments."],
              ["Real-time Notifications", "Get alerts for EMI due, paid or pending."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-xl mb-2 text-blue-700">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Flexi Loaner</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Flexi Loaner is a modern digital loan management platform to simplify and streamline the borrowing experience.
            Track loans, manage EMIs, and ensure smooth repayments – all from one dashboard.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            We'd love to hear from you. Reach out to us using the details below:
          </p>
          <div className="space-y-4 text-gray-700">
            <p><strong>📍 Address:</strong> 123 Flexi Lane, Tech City, IN 600001</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>✉️ Email:</strong> support@flexiloaner.com</p>
            <p><strong>⏰ Office Hours:</strong> Mon - Fri, 9:00 AM to 6:00 PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6">
        <p>© 2025 Flexi Loaner. All rights reserved.</p>
      </footer>
    </div>
  );
}
