export default function Navbar() {
  return (
    <header className="bg-white shadow px-8 py-5 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        Workplace Productivity Assistant
      </h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Login
      </button>
    </header>
  );
}