import { startMailMonitor } from "./Services/mailMonitor.js";
import { addTicketFromMail, getUUIDFromEmail } from "./Services/ticketManager.js";

startMailMonitor(addTicketFromMail)

// getUUIDFromEmail("aspasp1998@gmail.com").then(console.log)



console.log("started mail receiver")