let fullName = "Samuel Ayodeji"
let regexName = /^[A-Za-z\s]+$/
let result = regexName.test(fullName)
console.log(result)

let phoneNumber = "08123456789";
let regexNumber = /^0\d{10}$/
let resultTwo = regexNumber.test(phoneNumber)
console.log(resultTwo)

let email = fullName && phoneNumber ? fullName.toLowerCase().split(' ').join('') + "_" + phoneNumber.slice(7, 11) + "@nileuniversity.edu.ng" : "Invalid email generation"

let output = fullName && phoneNumber ? `Success! Your generated email is ${email}` : 'Error: Invalid Name or Phone Number' 

console.log(output)