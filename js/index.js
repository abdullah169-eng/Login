var signInInfo = Array.from(document.querySelectorAll(".signin input"));
var login = document.querySelector(".signin button");
var msg = document.querySelector("#msg");
// Data Storage
var checkList = JSON.parse(localStorage.getItem("emails"));
// Login
login.addEventListener("click", function () {
  for (var i = 0; i < checkList.length; i++) {
    if (signInInfo[0].value == checkList[i].email) {
      var myIndex = i;
      localStorage.setItem("index", myIndex);
    }
  }
  if (myIndex == undefined) {
    msg.innerHTML = "Wrong E-mail";
  } else {
    if (signInInfo[1].value == checkList[myIndex].password) {
      window.location.href = "home.html";
    } else if (signInInfo[1].value != checkList[myIndex].password) {
      msg.innerHTML = "Wrong Password";
    }
  }
});
