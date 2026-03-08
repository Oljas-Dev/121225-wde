const login = "test@test.com";
const pass = "11111111";

const signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let loginName = document.getElementById("loginName").value;
  let passField = document.getElementById("passField").value;

  if (loginName === login && passField === pass) {
    alert("Sign in is successfull");
    signInForm.reset();
  } else {
    alert("Your login or password doesn't match");
    signInForm.reset();
  }
});
