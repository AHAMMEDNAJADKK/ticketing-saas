import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  const fetchTickets = async () => {
    const { data } = await API.get("/tickets");
    setTickets(data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const createTicket = async () => {
    await API.post("/tickets", {
      title: "New Issue",
      description: "Something broken"
    });

    fetchTickets();
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={createTicket}>Create Ticket</button>

      {tickets.map((ticket) => (
        <div
          key={ticket._id}
          style={{ cursor: "pointer", border: "1px solid gray", margin: 10 }}
          onClick={() => navigate(`/ticket/${ticket._id}`)}
        >
          <h3>{ticket.title}</h3>
          <p>Status: {ticket.status}</p>
        </div>
      ))}
    </div>
  );
}
