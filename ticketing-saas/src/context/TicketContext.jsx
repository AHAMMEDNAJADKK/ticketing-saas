import { createContext, useState } from "react";
import { tickets as mockTickets } from "../data/mockData";

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState(mockTickets);
  const [selectedTicket, setSelectedTicket] = useState(mockTickets[0]);

  return (
    <TicketContext.Provider
      value={{ tickets, selectedTicket, setSelectedTicket }}
    >
      {children}
    </TicketContext.Provider>
  );
};
