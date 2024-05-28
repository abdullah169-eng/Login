// Data Storage
var userList = JSON.parse(localStorage.getItem("emails"));
var userIndex = localStorage.getItem("index");
// Inner
document.getElementById(
  "homeInner"
).innerHTML = `<p class="text-info fs-1 m-0 p-0 text-capitalize">Welcome ${userList[userIndex].name}</p>`;
