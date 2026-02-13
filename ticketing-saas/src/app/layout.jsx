import IconBar from "../components/layout/IconBar";
import ViewsSidebar from "../components/layout/ViewsSidebar";
import TicketList from "../components/layout/TicketList";
import Workspace from "../components/layout/Workspace";
import MetaPanel from "../components/layout/MetaPanel";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="bg-blue-700 text-white px-6 py-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Helpdesk</h1>

        <input
          type="text"
          placeholder="Search Capacity..."
          className="w-1/3 px-4 py-1 rounded-md text-black"
        />

        <button className="bg-blue-500 px-4 py-1 rounded-md">
          Create
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        <IconBar />
        <ViewsSidebar />
        <TicketList />
        <Workspace />
        <MetaPanel />
      </div>
    </div>
  );
}
