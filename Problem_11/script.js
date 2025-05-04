// Check if users already exist in localStorage
const users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Check if the user exists
  const user = users.find(u => u.email === email && u.mobile === password);

  if (user) {
    alert("Login successful!");
    // Redirect to data list page or show user data
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dataList.html";  // Create a page to show user data
  } else {
    alert("Invalid credentials.");
  }
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const dob = document.getElementById("dob").value;
  const city = document.getElementById("city").value;
  const address = document.getElementById("address").value;

  // Create a new user object
  const newUser = { name, email, mobile, dob, city, address };

  // Add the new user to the users array
  users.push(newUser);
  
  // Save users array to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");
  
  // Hide registration form and show login form
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});

// Toggle between login and registration forms
document.getElementById("showRegister").addEventListener("click", function () {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("registration-form").style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", function () {
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});
