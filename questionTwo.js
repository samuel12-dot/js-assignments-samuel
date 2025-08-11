let myName = "Samuel Ayodeji"
let age = 35
let numTickets = 5

let priceTicket = age ? 1500 : age <= 25 ? 2500 : 3500
let totalCost = priceTicket * numTickets

let regexName = /^[A-Za-z\s]+$/
let regexResult = regexName.test(myName)


let isStudent = age <= 25

let eligibleDiscount = isStudent ? "Yes" : "No"


let discount = isStudent ? (totalCost * 0.9) : totalCost

let output = `Hello ${myName},\n\nYou are eligible for a student discount: ${eligibleDiscount}\n\nTotal tickets ${numTickets}\n\nTotal price: ${discount}`

console.log(output)