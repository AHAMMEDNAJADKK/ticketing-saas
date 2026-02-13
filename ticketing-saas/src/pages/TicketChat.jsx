import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import socket from "../socket";

export default function TicketChat() {
  const { ticketId } = useParams();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // Load messages + join room
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await API.get(`/messages/${ticketId}`);
      setMessages(data);
    };

    fetchMessages();
    socket.emit("joinTicket", ticketId);
  }, [ticketId]);

  // Listen real-time
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = async () => {
    if (!message) return;

    await API.post(`/messages/${ticketId}`, {
      content: message
    });

    socket.emit("sendMessage", {
      ticketId,
      content: message
    });

    setMessage("");
  };

  return (
    <div>
      <h2>Ticket Chat</h2>

      <div style={{ border: "1px solid black", padding: 10, height: 300, overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
