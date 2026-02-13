import Ticket from "../models/Ticket.js";

export const getTickets = async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
};

export const createTicket = async (req, res) => {
  const ticket = await Ticket.create(req.body);
  res.status(201).json(ticket);
};

export const updateTicket = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  Object.assign(ticket, req.body);
  const updated = await ticket.save();

  res.json(updated);
};

export const deleteTicket = async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json({ message: "Ticket deleted successfully" });
};
