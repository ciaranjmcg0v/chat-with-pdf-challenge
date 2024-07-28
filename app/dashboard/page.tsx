import Documents from "@/components/Documents";

export const dynamic = "force-dynamic"

function Dashboard() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <div>
      <h1 className="text-3xl p-8 font-extralight text-indigo-600 pb-2 select-none">
        My Documents
      </h1>
      <div className="h-1 w-full bg-indigo-600" />
      </div>

      <Documents />
    </div>
  );
}

export default Dashboard;
