let fullName = "Samuel Ayodeji"
let regexName = /^[A-Za-z\s]+$/
let result = regexName.test(fullName)


let phoneNumber = "08090345678"
let regexPhone = /^0\d{10}$/
let phoneResult = regexPhone.test(phoneNumber)

let universityName = "@university.edu"

let emailGeneration = result && phoneResult ? fullName.toLowerCase().split(' ').join('') + "_" + phoneNumber.slice(7) + universityName : "invalid!"

let isValid = result && phoneResult ? `Your email generation is successful: ${emailGeneration}` : `Error validating email`


console.log(isValid)
