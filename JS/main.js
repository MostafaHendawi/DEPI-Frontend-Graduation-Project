//* ////////////////////////////////////////////// register & login

let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");
let loginStatus = document.getElementById("loginStatus");
let rememberMe = document.getElementById("rememberMe");

let fName = document.getElementById("fName");
let fNameMsg = document.querySelector("#fName + div");
let nameRegex = /^.{1,39}$/;

let lName = document.getElementById("lName");
let lNameMsg = document.querySelector("#lName + div");

let email = document.getElementById("email");
let emailMsg = document.querySelector("#email + div");
let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let phone = document.getElementById("phone");
let phoneMsg = document.querySelector("#phone + div");
let phoneRegex = /^(01)[0-2|5]{1}[0-9]{8}$/;

let password = document.getElementById("password");
let passwordMsg = document.querySelector("#password + div");
let passwordRegEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

let Cpassword = document.getElementById("Cpassword");
let CpasswordMsg = document.querySelector("#Cpassword + div");

//* ////////////////////////////////////////////////////////////////////////
let users;

if (localStorage.getItem("users") == null) {
  users = [];
  localStorage.setItem("users", JSON.stringify(users));
} else {
  users = JSON.parse(localStorage.getItem("users"));
}

window.onload = function () {
  let savedEmail = localStorage.getItem("email");
  let savedPassword = localStorage.getItem("password");

  if (savedEmail && savedPassword) {
    email.value = savedEmail;
    password.value = savedPassword;
    rememberMe.checked = true;
  }
};

//* ////////////////////////////////////////////////////////////////////////

if (fName != null) {
  fName.oninput = () => {
    IsValid(
      fName,
      fNameMsg,
      nameRegex,
      "Name length must be less than 40 character"
    );
  };
}

if (lName != null) {
  lName.oninput = () => {
    IsValid(
      lName,
      lNameMsg,
      nameRegex,
      "Name length must be less than 40 character"
    );
  };
}

if (email != null && registerForm != null) {
  email.oninput = () => {
    IsValid(
      email,
      emailMsg,
      emailRegEx,
      "Email should me like name@example.com"
    );
  };
}

if (phone != null) {
  phone.oninput = () => {
    IsValid(phone, phoneMsg, phoneRegex, "Enter an egyptian phone number");
  };
}

if (password != null && registerForm != null) {
  password.oninput = () => {
    IsValid(
      password,
      passwordMsg,
      passwordRegEx,
      "The password must be at least 8 characters containg : At least one lowercase letter , one uppercase letter ,one digit"
    );
  };
}

if (Cpassword != null) {
  Cpassword.oninput = () => {
    AreIdentical();
  };
}

//* ////////////////////////////////////////////////////////////////////////

if (registerForm != null) {
  registerForm.onsubmit = (event) => {
    event.preventDefault();

    if (
      IsValid(
        fName,
        fNameMsg,
        nameRegex,
        "Name length must be less than 40 character"
      ) &&
      IsValid(
        lName,
        lNameMsg,
        nameRegex,
        "Name length must be less than 40 character"
      ) &&
      IsValid(
        email,
        emailMsg,
        emailRegEx,
        "Email should me like name@example.com"
      ) &&
      IsValid(phone, phoneMsg, phoneRegex, "Enter an egyptian phone number") &&
      IsValid(
        password,
        passwordMsg,
        passwordRegEx,
        "The password must be at least 8 characters containg : At least one lowercase letter , one uppercase letter ,one digit"
      ) &&
      AreIdentical()
    ) {
      ShowToast();
      SaveUserDataToLocalStorage();
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    }
  };
}

//* ////////////////////////////////////////////////////////////////////////

function IsValid(input, message, condition, messageContent) {
  if (!IsEmpty(input, message)) {
    if (!condition.test(input.value)) {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      message.innerHTML = messageContent;
      message.classList.add("invalid-feedback");
      return false;
    } else {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      message.innerHTML = "";
      message.classList.remove("invalid-feedback");
      return true;
    }
  }
}

function IsEmpty(input, message) {
  if (input.value == "") {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    message.innerHTML = "Don't let this field empty";
    message.classList.add("invalid-feedback");
    return true;
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    message.innerHTML = "";
    message.classList.remove("invalid-feedback");
    return false;
  }
}

function AreIdentical() {
  if (password.value == Cpassword.value) {
    Cpassword.classList.remove("is-invalid");
    Cpassword.classList.add("is-valid");
    CpasswordMsg.innerHTML = "";
    CpasswordMsg.classList.remove("invalid-feedback");
    return true;
  } else {
    Cpassword.classList.remove("is-valid");
    Cpassword.classList.add("is-invalid");
    CpasswordMsg.innerHTML =
      "Password and confirm password should be identical";
    CpasswordMsg.classList.add("invalid-feedback");
    return false;
  }
}

function ShowToast() {
  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBootstrap.show();
}

function SaveUserDataToLocalStorage() {
  let formData = new FormData(registerForm);
  let user = {};
  formData.forEach((value, key) => {
    user[key] = value;
  });

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
}
//* ////////////////////////////////////////////////////////////////////////

if (loginForm != null) {
  loginForm.onsubmit = (event) => {
    event.preventDefault();
    if (IsValidToLogin()) {
      rememberYou();
      ShowToast();
      setTimeout(() => {
        window.location.href = "home.html";
      }, 2000);
    }
  };
}

function IsValidToLogin() {
  let isValid = false;

  users.some(function (element) {
    if (element.email == email.value && element.password == password.value) {
      isValid = true;
      loginStatus.classList.add("d-none");
      return true;
    } else {
      loginStatus.classList.remove("d-none");
      return false;
    }
  });
  return isValid;
}

function rememberYou() {
  if (rememberMe.checked) {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  } else {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }
}

//* ////////////////////////////////////////////////////////////////////////






                  /*        START   exploreMenus  SCRIPT             */

var myImgs = Array.from(document.querySelectorAll(".item img"));
 var nextElement = document.querySelector("#nextElement");
var previousElement = document.querySelector("#previousElement");
var cardTitle = document.querySelectorAll(".imagesSlider h4");
var cardText = document.querySelectorAll(".cardText");
                  
                  
let arr = [4, 3, 2, 1, 0];
let card4 = document.querySelector(".card4").innerHTML;
let card3 = document.querySelector(".card3").innerHTML;
let card2 = document.querySelector(".card2").innerHTML;
let card1 = document.querySelector(".card1").innerHTML;
let card0 = document.querySelector(".card0").innerHTML;
                  
                  
                  
nextElement.addEventListener("click", showNextElement);
previousElement.addEventListener("click", showPreviousElement);
                  
// 4 3 2 1 0  cards in html
//   2 1 0 4 3  imgs
let paragraphs = [`${card4}`,`${card3}` ,`${card2}` ,`${card1}` ,`${card0}` ];
let h4 = ["4", "3", "2", "1", "0"];
                  
                  
                  
function showNextElement() {
arr.push(arr.shift());
paragraphs.push(paragraphs.shift());
h4.push(h4.shift());
for (let index = 4; index >= 0; index--) {
    myImgs[arr[index]].setAttribute("src", `./Assets/meal-${index}.jpg`);
    cardText[index].innerHTML = paragraphs[index];
    cardTitle[index].innerHTML = h4[index];
  }
}
                  
// 4 3 2 1 0  cards in html
//  3 2 1 0 4 right
//  left
                  
function showPreviousElement() {
   arr.unshift(arr.pop());
   paragraphs.unshift(paragraphs.pop());
   h4.unshift(h4.pop());
                  
    for (let index = 4; index >= 0; index--) {
       myImgs[arr[index]].setAttribute("src", `./Assets/meal-${index}.jpg`);
       cardText[index].innerHTML = paragraphs[index];
       cardTitle[index].innerHTML = h4[index];
       }
 }
//  =============sweper
function toggleHeart(button) {
  // Toggle the active class
  button.classList.toggle('heart-active'); 

  // Check if the heart is active and set the display accordingly
  if (button.classList.contains('heart-active')) {
    button.style.display = 'block'; // Show the icon if active
  } else {
    button.style.display = 'none'; // Hide the icon if not active
  }
}

// ========




                                          /*          END   exploreMenus  SCRIPT                  */










