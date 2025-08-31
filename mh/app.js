var container = document.querySelector(".container");
var registerBtn = document.querySelector(".register-btn");
var loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function togglePassword(passId, iconId) {
  var passInput = document.getElementById(passId);
  var icon = document.getElementById(iconId);

  icon.addEventListener("click", () => {
    passInput.type = passInput.type === "password" ? "text" : "password";
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });
}

togglePassword("pass-login", "toggle-login");
togglePassword("pass-reg1", "toggle-reg1");
togglePassword("pass-reg2", "toggle-reg2");

// Register form validation
document.getElementById("reg-form").addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.getElementById("username").value.trim();
  var email = document.getElementById("email").value.trim().toLowerCase();
  var password = document.getElementById("pass-reg1").value.trim();
  var confirmation = document.getElementById("pass-reg2").value.trim();

  var userhi = document.getElementById("username-hint");
  var emailh = document.getElementById("email-hint");
  var passh = document.getElementById("password-hint");
  var conh = document.getElementById("con-hint");
  var aal = document.getElementById("ell")
  var usernameRegex = /^[a-zA-Z]{3,16}$/;
  var emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  var hasError = false;

  if (!usernameRegex.test(username)) {
    userhi.style.color = "red";
    hasError = true;
  }

  if (!emailRegex.test(email)) {
    emailh.style.color = "red";
    hasError = true;
  }

  if (!passwordRegex.test(password)) {
    passh.style.color = "red";
    hasError = true;
  }

  if (password !== confirmation || confirmation === "") {
    conh.style.color = "red";
    conh.style.display = "block";
    hasError = true;
  }

  if (hasError) return;

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // validaid local
  if (localStorage.getItem(email)) {
    aal.style.display ="block";
    return;
  }

  localStorage.setItem(email, username + "|" + password);

 
  this.reset();
});

// Login form
document
  .querySelector(".form-box.login form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var usernameOrEmail = this.querySelector('input[placeholder="UserName"]')
      .value.trim()
      .toLowerCase();
    var password = document.getElementById("pass-login").value.trim();

    var storedUsername = localStorage.getItem("username")?.toLowerCase();
    var storedEmail = localStorage.getItem("email")?.toLowerCase();
    var storedPassword = localStorage.getItem("password");

    if (
      (usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) &&
      password === storedPassword
    ) {
      // alert("Welcome back, " + localStorage.getItem("username") + "!");
      window.open("../index.html");
    } else {
      alert("Invalid username/email or password.");
    }
  });
