export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Library Management System</h1>
        <nav className="space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:underline">Home</a>
          <a href="#login-section" className="hover:underline">Login</a>
          <a href="#catalog" className="hover:underline">Catalog</a>
        </nav>
      </header>

      {/* Intro Section */}
      <section className="p-10 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Welcome to SmartLibrary</h2>
        <p className="mb-6 max-w-xl mx-auto">Manage your library access with ease. Whether you're a student, librarian, or admin, our system helps you find, borrow, and organize books effortlessly.</p>
        <a href="#login-section" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Get Started</a>
      </section>

      {/* Login Section */}
      <section id="login-section" className="p-10 bg-white">
        <form className="max-w-md mx-auto shadow-md p-8 rounded border" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
          <input className="w-full p-2 mb-4 border rounded" type="text" placeholder="Enter your name" required />
          <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="Enter your email" required />
          <input className="w-full p-2 mb-2 border rounded" type="password" placeholder="Enter your password" required />
          <span className="text-sm text-blue-600 cursor-pointer mb-4 inline-block">Show Password</span>
          <select className="w-full p-2 mb-4 border rounded" required>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="librarian">Librarian</option>
            <option value="admin">Admin</option>
          </select>
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" type="submit">Login</button>
        </form>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="p-10 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4 text-center">Explore Our Catalog</h2>
        <p className="text-center mb-8">Browse our library's curated collection of books and resources.</p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Book Card 1 */}
          <div className="border rounded p-4 text-center shadow bg-white">
            <img src="/Book1.jpg" alt="Book Cover" className="h-40 mx-auto mb-4 object-contain" />
            <h3 className="font-semibold">Digital Logic Design</h3>
            <p className="text-sm">by M. Morris Mano</p>
            <span className="text-xs inline-block mt-2 mb-4 bg-blue-100 text-blue-700 px-2 py-1 rounded">Engineering</span>
            <button className="block w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">Borrow</button>
          </div>
          {/* Book Card 2 */}
          <div className="border rounded p-4 text-center shadow bg-white">
            <img src="/Book2.jpeg" alt="Book Cover" className="h-40 mx-auto mb-4 object-contain" />
            <h3 className="font-semibold">Introduction to Algorithms</h3>
            <p className="text-sm">by Cormen et al.</p>
            <span className="text-xs inline-block mt-2 mb-4 bg-green-100 text-green-700 px-2 py-1 rounded">Computer Science</span>
            <button className="block w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">Borrow</button>
          </div>
          {/* Book Card 3 */}
          <div className="border rounded p-4 text-center shadow bg-white">
            <img src="/Book3.jpg" alt="Book Cover" className="h-40 mx-auto mb-4 object-contain" />
            <h3 className="font-semibold">Atomic Habits</h3>
            <p className="text-sm">by James Clear</p>
            <span className="text-xs inline-block mt-2 mb-4 bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Self-help</span>
            <button className="block w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">Borrow</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="p-10 bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose SmartLibrary?</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="text-center p-4 border rounded shadow">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt="Lending Icon"
              width="60"
              height="60"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">Tracks Lending</h3>
            <p className="text-sm text-gray-600">Keep a detailed record of who borrowed what and when. Smart tracking prevents losses and improves accountability.</p>
          </div>
          <div className="text-center p-4 border rounded shadow">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="Fine Icon"
              width="60"
              height="60"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">Calculates Fine Amounts</h3>
            <p className="text-sm text-gray-600">Automatic fine calculation for late returns ensures fairness while saving manual effort.</p>
          </div>
          <div className="text-center p-4 border rounded shadow">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
              alt="Notification Icon"
              width="60"
              height="60"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">Smart Notifications</h3>
            <p className="text-sm text-gray-600">Get instant alerts on due dates, return reminders, and new arrivals through email or SMS.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-blue-600 text-white text-center mt-10">
        <p>© 2025 SmartLibrary. All rights reserved.</p>
        <p className="mt-2"><a href="#" className="underline">Contact</a> | <a href="#" className="underline">Privacy</a> | <a href="#" className="underline">GitHub</a></p>
      </footer>
    </div>
  );
}
