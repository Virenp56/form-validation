let submitButton = document.getElementById("submitButton");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let contact = document.getElementById("contact");
let personalEmail = document.getElementById("personal-email");
let organizationalEmail = document.getElementById("organizational-email");
let salary = document.getElementById("salary");
let password = document.getElementById("password");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  //Validation for First Name
  if (firstName.value.trim() == "") {
    document.querySelector(".fname-span").innerHTML = "Enter first name";
  } else if (firstName.value.trim().length > 15) {
    document.querySelector(".fname-span").innerHTML = "Firstname is too long";
  } else if (!firstName.value.trim().match(/^[a-zA-Z]*$/)) {
    document.querySelector(".fname-span").innerHTML = "Enter valid first name";
  } else {
    console.log(firstName.value);
    document.querySelector(".fname-span").innerHTML = "";
  }

  //Validation for Last Name
  if (lastName.value.trim() == "") {
    document.querySelector(".lname-span").innerHTML = "Enter Last name";
  } else if (lastName.value.trim().length > 15) {
    document.querySelector(".lname-span").innerHTML = "Last name is too long";
  } else if (!lastName.value.trim().match(/^[a-zA-Z]*$/)) {
    document.querySelector(".lname-span").innerHTML = "Enter valid last name";
  } else {
    console.log(lastName.value);
    document.querySelector(".lname-span").innerHTML = "";
  }

  //Validation for mobile number
  if (contact.value.trim() == "") {
    document.querySelector(".contact-span").innerHTML = "Enter mobile number";
  } else if (contact.value.trim().match(/^[a-zA-Z]*$/)) {
    document.querySelector(".contact-span").innerHTML =
      "mobile number cannot be charectar";
  } else if (!contact.value.trim().match(/[89]/)) {
    document.querySelector(".contact-span").innerHTML =
      "mobile number must strat with 8 or 9";
  } else if (!contact.value.trim().match(/^[89][0-9]{9}/)) {
    document.querySelector(".contact-span").innerHTML = "wrong mobile number";
  } else if (contact.value.trim().length > 10) {
    document.querySelector(".contact-span").innerHTML =
      "mobile number cannot be greater than 10 number";
  } else {
    console.log(contact.value);
    document.querySelector(".contact-span").innerHTML = "";
  }

  //Validation for personal email
  if (personalEmail.value.trim() == "") {
    document.querySelector(".personal-email-span").innerHTML =
      "Enter Personal Email";
  } else if (
    !personalEmail.value
      .trim()
      .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/)
  ) {
    document.querySelector(".personal-email-span").innerHTML =
      "Enter Valid Email";
  } else {
    console.log(personalEmail.value);
    document.querySelector(".personal-email-span").innerHTML = "";
  }

  //Validation for organizational email
  if (organizationalEmail.value.trim() == "") {
    document.querySelector(".organizational-email-span").innerHTML =
      "Enter Organizational Email";
  } else if (
    !organizationalEmail.value.trim().match(/^[a-zA-Z0-9._-]+@1Rivet\.com$/)
  ) {
    document.querySelector(".organizational-email-span").innerHTML =
      "Enter Valid Email";
  } else {
    console.log(organizationalEmail.value);
    document.querySelector(".organizational-email-span").innerHTML = "";
  }

  //Validation for salary
  if (salary.value.trim() == "") {
    document.querySelector(".salary-span").innerHTML = "Enter Salary";
  } else if (Number(salary.value) < 5000) {
    document.querySelector(".salary-span").innerHTML =
      "Salary should be greater than 5000";
  } else if (salary.value.trim().match(/^[a-zA-Z_0-9]*$/)) {
    document.querySelector(".salary-span").innerHTML = "Enter Valid Salary";
  } else {
    console.log(salary.value);
    document.querySelector(".salary-span").innerHTML = "";
  }

  //Validation for Password
  if (password.value.trim() == "") {
    document.querySelector(".password-span").innerHTML = "Enter Password";
  } else if (
    password.value.trim().length <= 8 ||
    password.value.trim().length >= 16
  ) {
    document.querySelector(".password-span").innerHTML =
      "Password length must be 8 to 16";
  } else {
    document.querySelector(".password-span").innerHTML = "";
  }
});
