import { useContext, useState } from "react";
import { TicketContext } from "../../context/TicketContext";
import StatusBadge from "../ticket/StatusBadge";

export default function TicketList() {
  const { tickets, selectedTicket, setSelectedTicket } =
    useContext(TicketContext);

  const [search, setSearch] = useState("");

  const filtered = tickets.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-80 border-r bg-white flex flex-col">
      <div className="p-4 border-b">
        <input
          type="text"
          placeholder="Search tickets..."
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {filtered.map((ticket) => (
          <div
            key={ticket.id}
            onClick={() => setSelectedTicket(ticket)}
            className={`p-4 border-b cursor-pointer transition ${
              selectedTicket.id === ticket.id
                ? "bg-blue-50"
                : "hover:bg-slate-50"
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">
                {ticket.title}
              </h3>
              <StatusBadge status={ticket.status} />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Assigned to {ticket.assignee}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
