let profilePic = document.getElementsByClassName("profile")

for (let i = 0; i < profilePic.length; i++) {
  if (localStorage.getItem("userImg")) {
    
    profilePic[i].src = localStorage.getItem("userImg")
  }
  
}
// //* ////////////////////////////////////////////// register & login

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

// //* ////////////////////////////////////////////////////////////////////////
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

// //* ////////////////////////////////////////////////////////////////////////

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

// //* ////////////////////////////////////////////////////////////////////////

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

// //* ////////////////////////////////////////////////////////////////////////

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
  let toastLiveExample = document.getElementById("liveToast");
  let toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBootstrap.show();
}

function SaveUserDataToLocalStorage() {
  let formData = new FormData(registerForm);
  let user = {};
  formData.forEach((value, key) => {
    user[key] = value;
  });

  console.log(user);
  
  user.accountType = "Basic";

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
}
//* ////////////////////////////////////////////////////////////////////////

if (loginForm != null) {
  loginForm.onsubmit = (event) => {
    event.preventDefault();
    let result = IsValidToLogin();
    console.log(result.isValid);
    console.log(result.user);
    if (result.isValid) {
      localStorage.setItem("currentUser", JSON.stringify(result.user));
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
  let user;

  users.some(function (element) {
    if (element.email == email.value && element.password == password.value) {
      isValid = true;
      user = element;
      loginStatus.classList.add("d-none");
      return true;
    } else {
      return false;
    }
  });

  if (!isValid) {
    loginStatus.classList.remove("d-none");
  }

  return { isValid, user };
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



//* ////////////////////////////////////// Recipes

let searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    let filter = this.value.toLowerCase();
    console.log(filter);

    let cards = document.querySelectorAll("#cardsRow .col-md-6");

    cards.forEach(function (card) {
      let title = card.querySelector("h5").textContent.toLowerCase();

      if (title.startsWith(filter)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}

//* ////////////////////////////////////////// Cart logic

let plus = document.querySelectorAll(".plus");
let count = document.querySelectorAll(".count");
let minus = document.querySelectorAll(".minus");

for (let i = 0; i < plus.length; i++) {
  let k = 1;
  let l;

  plus[i].onclick = function () {
    count[i].innerHTML = k;
    k++;
    l = count[i].innerHTML;
  };

  minus[i].onclick = function () {
    if (l > 0) {
      console.log(l);

      count[i].innerHTML = l - 1;
      k = l;
      l--;
    }
  };
}


let cartIcon = document.querySelector(".cartIcon");
let myCart = document.querySelector(".myCart");

if (cartIcon) {
  cartIcon.onclick = () => {
    if (myCart.style.display == "none") {
      myCart.style.display = "block";
    } else {
      myCart.style.display = "none";
    }
  };
}

let addTocart = document.getElementsByClassName("addTocart");
let cartContent = document.querySelector(".myCart .content");

let products;

if (cartContent) {
  if (localStorage.getItem("products") == null) {
    cartContent.innerHTML = `Your cart is empty`;
    cartContent.style =
      "display:flex;justify-content:center;align-items:center;";
  } else {
    products = localStorage.getItem("products");
    cartContent.innerHTML = products;
    cartContent.style = "display:flex";
  }
}

if (addTocart) {
  for (let i = 0; i < addTocart.length; i++) {
    addTocart[i].onclick = (event) => {
      let parentCard = event.target.closest(".cards");
      let imgSrc = parentCard.querySelector("img").src;
      let price = parentCard.querySelector("b").innerHTML;
      let name = parentCard.querySelector("h5").innerHTML;
      let description = parentCard.querySelector("p").innerHTML;

      if (count[i].innerHTML > 0) {
        addProduct(imgSrc, price, name, count[i].innerHTML, description);
      }
    };
  }
}

function addProduct(imgSrc, price, name, countValue, description) {
  let productElement = document.createElement("div");
  productElement.classList.add(
    "product",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "w-100"
  );

  productElement.innerHTML = `
        <img width="30px" height="30px" src="${imgSrc}" alt="">
        <div>
            <p>${name}</p>
            <p>${price} x <span class="count">${countValue}</span></p>
        </div>
        <i class="trash fa-solid fa-trash-can"></i>

        <hr>
    `;

  if (cartContent.innerHTML == `Your cart is empty`) {
    cartContent.innerHTML = "";
  }
  cartContent.appendChild(productElement);

  let trashIcon = productElement.querySelector(".trash");

  trashIcon.addEventListener("click", function () {
    del(productElement);
  });

  updateLocalStorage();

  let modal = document.getElementById("modal");
  modal.click();
}

function del(productElement) {
  if(productElement){
    productElement.remove();
    updateLocalStorage();
  }

}

function updateLocalStorage() {
  let remainingProducts = cartContent.innerHTML;
  if (remainingProducts == "") {
    cartContent.innerHTML = `Your cart is empty`;
    cartContent.style =
      "display:flex;justify-content:center;align-items:center;";
    localStorage.setItem("products", `Your cart is empty`);
  } else {
    localStorage.setItem("products", remainingProducts);
  }
}


let trashIcons = document.querySelectorAll(".trash");

for (let i = 0; i < trashIcons.length; i++) {

  trashIcons[i].addEventListener("click", function () {
    trashIcons[i].parentNode.remove();
    localStorage.setItem("products" , cartContent.innerHTML)
  });
}


//* ////////////////////////////////////////// Add to favourite

let favourite = document.querySelectorAll(".fa-heart:not(.nav)");

function toggleHeart(button) {
  button.classList.toggle("heart-active");

  let itemId = button.getAttribute("data-id");

  let savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (button.classList.contains("heart-active")) {
    button.classList.replace("fa-regular", "fa-solid");

    if (!savedFavorites.includes(itemId)) {
      savedFavorites.push(itemId);
    }
  } else {
    button.classList.replace("fa-solid", "fa-regular");
    savedFavorites = savedFavorites.filter((fav) => fav !== itemId);
  }
  localStorage.setItem("favorites", JSON.stringify(savedFavorites));
}

function loadFavorites() {
  let savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  savedFavorites.forEach((itemId) => {
    let button = document.querySelector(`.fa-heart[data-id="${itemId}"]`);
    if (button) {
      button.classList.add("heart-active");
      button.classList.replace("fa-regular", "fa-solid");
    }
  });
}

window.onload = loadFavorites;

//* ////////////////////////////////////////// recipe details

let recipes = document.querySelectorAll(".recipe img");

recipes.forEach((element) => {
  element.ondblclick = (event) => {
    let parentCard = event.target.closest(".cards");
    let imgSrc = parentCard.querySelector("img").src;
    let price = parentCard.querySelector("b").innerHTML;
    let name = parentCard.querySelector("h5").innerHTML;
    let description = parentCard.querySelector("p").innerHTML;

    let url = `details.html?imgSrc=${imgSrc}&price=${price}&name=${name}&description=${description}`;
    window.location.href = url;
  };
});

//* ////////////////////////////////////////// Profile


let CurrentUser = JSON.parse(localStorage.getItem("currentUser"));
let ProfileFname = document.getElementById("ProfileFname");
let ProfileFnameMsg = document.querySelector("#ProfileFname + div");

let ProfileLname = document.getElementById("ProfileLname");
let ProfileLnameMsg = document.querySelector("#ProfileLname + div");

let ProfileEmail = document.getElementById("ProfileEmail");

let profilePhone = document.getElementById("profilePhone");
let profilePhoneMsg = document.querySelector("#profilePhone + div");

let profilePassword = document.getElementById("profilePassword");
let profilePasswordMsg = document.querySelector("#profilePassword + div");

let accountType = document.getElementById("accountType");

let userForm = document.getElementById("userForm");


if (ProfileFname) {
  ProfileFname.value = CurrentUser.fName;
  ProfileLname.value = CurrentUser.lName;
  ProfileEmail.value = CurrentUser.email;
  profilePhone.value = CurrentUser.phone;
  profilePassword.value = CurrentUser.password;
  accountType.value = CurrentUser.accountType;
  console.log(CurrentUser);
}

if (ProfileFname != null) {
  ProfileFname.oninput = () => {
    IsValid(
      ProfileFname,
      ProfileFnameMsg,
      nameRegex,
      "Name length must be less than 40 character"
    );
  };
}

if (ProfileLname != null) {
  ProfileLname.oninput = () => {
    IsValid(
      ProfileLname,
      ProfileLnameMsg,
      nameRegex,
      "Name length must be less than 40 character"
    );
  };
}

if (profilePhone != null) {
  profilePhone.oninput = () => {
    IsValid(
      profilePhone,
      profilePhoneMsg,
      phoneRegex,
      "Enter an egyptian phone number"
    );
  };
}

if (profilePassword != null) {
  profilePassword.oninput = () => {
    IsValid(
      profilePassword,
      profilePasswordMsg,
      passwordRegEx,
      "The password must be at least 8 characters containg : At least one lowercase letter , one uppercase letter ,one digit"
    );
  };
}

if (userForm != null) {
  userForm.onsubmit = (event) => {
    event.preventDefault();
    if (
      IsValid(
        ProfileLname,
        ProfileLnameMsg,
        nameRegex,
        "Name length must be less than 40 character"
      ) &&
      IsValid(
        ProfileLname,
        ProfileLnameMsg,
        nameRegex,
        "Name length must be less than 40 character"
      ) &&
      IsValid(
        profilePhone,
        profilePhoneMsg,
        phoneRegex,
        "Enter an egyptian phone number"
      ) &&
      IsValid(
        profilePassword,
        profilePasswordMsg,
        passwordRegEx,
        "The password must be at least 8 characters containg : At least one lowercase letter , one uppercase letter ,one digit"
      ) 
    ) {
      ShowToast();
      UpdateUserDataToLocalStorage();
    }
  };
}


function UpdateUserDataToLocalStorage() {
    let formData = new FormData(userForm);
    
    let user = {};
    formData.forEach((value, key) => {
      user[key] = value;
    });
  
    user.email = ProfileEmail.value;

    users.some(function (element) {
      if (element.email == user.email) {

        Object.keys(user).forEach(key => {
          element[key] = user[key];
        });

        localStorage.setItem("currentUser" , JSON.stringify(user))

        return true;
      } 
    });

    localStorage.setItem("users", JSON.stringify(users));
}

let cancel = document.getElementById("cancel")

if(cancel){
  cancel.onclick = (event)=>{
    window.location.reload();
  }
}

let changePicBtn = document.getElementById('changePicBtn');
let deletePicBtn = document.getElementById('deletePicBtn');
let imageInput = document.getElementById('imageInput');
let userImage = document.getElementById('userImage');


if (changePicBtn) {
  changePicBtn.addEventListener("click", () => {
    imageInput.click(); 
  });
}


if (imageInput) {
  imageInput.addEventListener('change', (event) => {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function(e) {
        userImage.src = e.target.result;
        localStorage.setItem("userImg" ,userImage.src )
      };
      reader.readAsDataURL(file);
      window.location.reload();

    }
  });

  
}

if (deletePicBtn) {

deletePicBtn.addEventListener('click', () => {
  localStorage.removeItem("userImg")
  window.location.reload();
});
}

// * ///////////////////////////////////// Orders History

const orders = [
  {
    list: "Egyptian",
    date: "2024-10-12",
    price: "$50",
    status: "Shipped",
    orderNumber: "001",
  },
  {
    list: "Italian",
    date: "2024-10-13",
    price: "$30",
    status: "Shipped",
    orderNumber: "002",
  },
  {
    list: "Egyptian",
    date: "2024-10-14",
    price: "$20",
    status: "Shipped",
    orderNumber: "003",
  },
  {
    list: "Korean",
    date: "2024-10-15",
    price: "$60",
    status: "Shipped",
    orderNumber: "004",
  },
];

const table = document.getElementById("order-record-table");

function loadOrders(filteredOrders = orders) {
  table.innerHTML = ""; 

  filteredOrders.forEach((order, index) => {
    const row = document.createElement("div");
    row.className =
      "table-row d-flex justify-content-between align-items-center";
    row.innerHTML = `
      <span>${order.list}</span>
      <span style="margin-left:-2rem;">${order.date}</span>
      <span style="margin-left:-2rem;">${order.price}</span>
      <span>${order.status}</span>
      <span>${order.orderNumber}</span>
    `;
    table.appendChild(row);
  });
}

function filterOrders() {
  const searchTerm = document
    .getElementById("search-bar")
    .value.toLowerCase();
  const filteredOrders = orders.filter((order) =>
    order.list.toLowerCase().includes(searchTerm)
  );
  loadOrders(filteredOrders);
}

let searchBar = document.getElementById("search-bar")
if (searchBar) {
  
  searchBar.addEventListener("input", filterOrders);
}

if (table) {
  
  loadOrders();
}



// *********************************** order

// let offcanvasBody = document.getElementsByClassName("offcanvas-body")[0];
// let ordersToPayfor = document.getElementsByClassName("orders")[0];

// let CartContent = localStorage.getItem("products")

// ordersToPayfor.innerHTML = CartContent



