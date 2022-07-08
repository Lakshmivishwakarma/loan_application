function validateForm() {
    //get data from form
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pan = document.getElementById("pan").value;
  let loanAmount = document.getElementById("email").value;
// validate data


// if success then return true else return false


  let person= {
    name,
    email,
    pan,
    loanAmount,
  };
  console.log(person);
  return true;
}


