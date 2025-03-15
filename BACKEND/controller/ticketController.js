const Ticket = require("../models/ticketSchema");
module.exports.createTicket = async (req, res) => {
  try {
    const user = req.user._id;
    const { source, destination, ticketOwner, price, status, date } = req.body;
    if (!source || !destination || !ticketOwner || !price || !status || !date) {
      throw new Error("field cannot be empty");
    }
    const allowedStatus = ["pendind", "confirm", "cancel"];
    if (!allowedStatus.includes(status)) {
      throw new Error("Invalid status");
    }
    const ticket = new Ticket({
      owner:user,  
      source,
      destination,
      ticketOwner,
      price, 
      status,
      date,
    });
    await ticket.save();
    res.status(201).send(ticket);
  } catch (err) {
    console.log(err);
  }
};
