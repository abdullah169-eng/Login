var signUpInfo = Array.from(document.querySelectorAll(".signup input"));
var signUp = document.querySelector(".signup button");
var failed = document.querySelector("#failed");
var Success = document.querySelector("#Success");
// Data Storage
var emailList;
if (localStorage.getItem("emails") == null) {
  emailList = [];
} else {
  emailList = JSON.parse(localStorage.getItem("emails"));
}
// Validation
for (var i = 0; i < signUpInfo.length; i++) {
  signUpInfo[i].addEventListener("input", function (e) {
    validateInputs(e.target);
    Success.classList.replace("d-block", "d-none");
    failed.innerHTML = "";
  });
}
function validateInputs(element) {
  var regex = {
    SignupName: /^[A-Za-z][a-z]{2,8}$/,
    SignupEmail: /^[a-z0-9]{3,16}@(gmail|yahoo)\.(com|net)$/,
    SignupPassword: /^.{4,16}$/,
  };

  if (regex[element.id].test(element.value)) {
    element.classList.add("valid");
    element.classList.remove("invalid");
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
  }
}
// Add New Email
signUp.addEventListener("click", function () {
  addEmail();
});
function addEmail() {
  if (
    signUpInfo[0].classList.contains("valid") &&
    signUpInfo[1].classList.contains("valid") &&
    signUpInfo[2].classList.contains("valid")
  ) {
    for (var i = 0; i < emailList.length; i++) {
      if (signUpInfo[1].value == emailList[i].email) {
        var used = 1;
      } else {
        used = 0;
      }
    }
    if (used == 1) {
      failed.innerHTML = "Used E-mail";
    } else {
      var user = {
        name: signUpInfo[0].value,
        email: signUpInfo[1].value,
        password: signUpInfo[2].value,
      };
      emailList.push(user);
      localStorage.setItem("emails", JSON.stringify(emailList));
      Success.classList.replace("d-none", "d-block");
      clearForm();
      window.location.href = "index.html";
    }
  } else if (
    signUpInfo[0].classList.contains("valid") == false &&
    signUpInfo[1].classList.contains("valid") == false &&
    signUpInfo[2].classList.contains("valid") == false
  ) {
    failed.innerHTML = "Invalid Data";
  } else if (signUpInfo[0].classList.contains("valid") == false) {
    failed.innerHTML = "Invalid Name";
  } else if (signUpInfo[2].classList.contains("valid") == false) {
    failed.innerHTML = "Invalid Password";
  } else if (signUpInfo[1].classList.contains("valid") == false) {
    failed.innerHTML = "Invalid E-mail";
  }
}
// Clear Form
function clearForm() {
  signUpInfo[0].value = null;
  signUpInfo[1].value = null;
  signUpInfo[2].value = null;

  signUpInfo[0].classList.remove("valid");
  signUpInfo[1].classList.remove("valid");
  signUpInfo[2].classList.remove("valid");
}
