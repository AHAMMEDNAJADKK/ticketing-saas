import Message from "../models/Message.js";
import Ticket from "../models/Ticket.js";

export const sendMessage = async (req, res) => {
  const ticket = await Ticket.findById(req.params.ticketId);

  if (!ticket || ticket.organization.toString() !== req.user.organization.toString()) {
    return res.status(403).json({ message: "Access denied" });
  }

  const message = await Message.create({
    ticket: ticket._id,
    sender: req.user._id,
    content: req.body.content
  });

  res.status(201).json(message);
};

export const getMessages = async (req, res) => {
  const messages = await Message.find({
    ticket: req.params.ticketId
  }).populate("sender", "name");

  res.json(messages);
};
