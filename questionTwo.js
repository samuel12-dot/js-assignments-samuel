let name = "Samuel Ayodeji"
let age = 15
let numTickets = 2
let ticketPrice;

let regexName = /^[A-Za-z\s]+$/ig
let result = name.match(regexName)


ticketPrice = age < 18 ? 1500 : age <= 25 ? 2500 : 3500

let cost = ticketPrice * numTickets

let isStudent = age <= 25

let studentDiscount = isStudent ? cost = cost * 0.9 : cost 

let finalOutput = result ? `Hello ${name},\n\nYou are eligible for a student discount; ${isStudent ? 'Yes' : 'No'}\n\nTotal tickets: ${numTickets}\n\nTotal price to pay: ${cost}` : `Invalid name`

console.log(finalOutput)