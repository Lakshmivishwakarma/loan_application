let url_string = window.location;
let url = new URL(url_string);

// parse url data 
let fullName = url.searchParams.get("name");
// get firstname from full name
let firstName= fullName.split(" ")[0];
let email = url.searchParams.get("email");

// set missing fields
document.getElementById('firstName').innerHTML= firstName
document.getElementById('email').innerHTML= email;

// Create 4 digit random number

const otp  =  Math.floor(1000 + Math.random() * 9000);
console.log(`Your 4 digit OTP is ${otp}`);


