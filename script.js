let captchaFirst=  Math.floor(1+Math.random()*10);
console.log(captchaFirst);

let captchaSecond=  Math.floor(1+Math.random()*10);
console.log(captchaSecond);
// displaying captcha values on UI
document.getElementById("firstNumber").innerHTML=captchaFirst;
document.getElementById("secondNumber").innerHTML=captchaSecond;
function validateForm() {

//validating captcha first

const userCaptcha = document.getElementById("captchaAnswer").value;
if (parseInt(userCaptcha) !== captchaFirst+captchaSecond) {
    alert("Invalid captcha");
    return false;
}
  //get data from form
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pan = document.getElementById("pan").value;
  let loanAmount = document.getElementById("loan_amount").value;
  // validate data
  if(name.length===0){
    alert("Please Enter Valid name")
    return false;
  }
  if(email.length===0){
    alert("Please Enter Valid Email ID")
    return false;
  }
  if(pan.length===0){
    alert("Please Enter Valid PAN Number")
    return false;
  }
  if(loanAmount.length===0){
    alert("Please Enter Loan Amount")
    return false;
  }





  // if success then return true else return false

  let person = {
    name,
    email,
    pan,
    loanAmount,
  };
  console.log(person);
  return true;
}
