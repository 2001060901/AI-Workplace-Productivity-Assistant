import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import DashboardCards from "@/components/DashboardCards";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main className="p-8 overflow-y-auto">

          <h1 className="text-4xl font-bold">
            AI Workplace Productivity Assistant
          </h1>

          <p className="text-gray-600 mt-2">
            Improve productivity using AI-powered workplace tools.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-blue-600 text-white rounded-xl p-6 shadow">
              <h3 className="text-sm uppercase">
                Emails Generated
              </h3>

              <p className="text-4xl font-bold mt-3">
                128
              </p>
            </div>

            <div className="bg-green-600 text-white rounded-xl p-6 shadow">
              <h3 className="text-sm uppercase">
                Tasks Planned
              </h3>

              <p className="text-4xl font-bold mt-3">
                76
              </p>
            </div>

            <div className="bg-purple-600 text-white rounded-xl p-6 shadow">
              <h3 className="text-sm uppercase">
                Research Reports
              </h3>

              <p className="text-4xl font-bold mt-3">
                34
              </p>
            </div>

            <div className="bg-orange-600 text-white rounded-xl p-6 shadow">
              <h3 className="text-sm uppercase">
                AI Chats
              </h3>

              <p className="text-4xl font-bold mt-3">
                245
              </p>
            </div>

          </div>

          <DashboardCards />

        </main>

      </div>

    </div>
  );
}