import { useContext, useState } from "react";
import { TicketContext } from "../../context/TicketContext";
import Composer from "../ticket/Composer";
import MessageCard from "../ticket/MessageCard";
import StatusBadge from "../ticket/StatusBadge";

export default function Workspace() {
  const { selectedTicket } = useContext(TicketContext);
  const [tab, setTab] = useState("public");

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="p-6 border-b flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">
            {selectedTicket.title}
          </h2>
          <StatusBadge status={selectedTicket.status} />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 pt-4 flex gap-6 text-sm border-b">
        <button
          onClick={() => setTab("public")}
          className={`pb-2 ${
            tab === "public"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-slate-500"
          }`}
        >
          Public Reply
        </button>

        <button
          onClick={() => setTab("private")}
          className={`pb-2 ${
            tab === "private"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-slate-500"
          }`}
        >
          Private Comment
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <MessageCard />
        <MessageCard />
      </div>

      <Composer />
    </div>
  );
}

