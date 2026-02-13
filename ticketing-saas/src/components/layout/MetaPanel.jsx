import { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";

export default function MetaPanel() {
  const { selectedTicket } = useContext(TicketContext);

  return (
    <div className="w-80 bg-slate-50 border-l p-6 space-y-6">
      <div>
        <label className="text-xs text-slate-500">Priority</label>
        <select className="input mt-1">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-slate-500">Assigned To</label>
        <input
          className="input mt-1"
          value={selectedTicket.assignee}
          readOnly
        />
      </div>

      <div>
        <label className="text-xs text-slate-500">Status</label>
        <select className="input mt-1">
          <option>Open</option>
          <option>Pending</option>
          <option>Resolved</option>
        </select>
      </div>
    </div>
  );
}
