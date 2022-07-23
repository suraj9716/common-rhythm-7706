// function openForm() {
//     document.getElementById("myForm").style.display = "block";
//   }
  
//   function closeForm() {
//     document.getElementById("myForm").style.display = "none";
//   }
  
  // ----------------------------------functionality part begin here------------------------------
  
  var form = document.querySelector("form");
    var userData = JSON.parse(localStorage.getItem("userData"));
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = {
        email: form.email.value,
        password: form.password.value,
      };
  
      if (userData === null) {
        alert("Please Create an Account");
      } else if (
        userData.email == data.email &&
        userData.password == data.password
      ) {
        alert("Log In Successful");
        localStorage.setItem("login", JSON.stringify(userData));
        window.location.href = "../../home page/index.html";
      } else {
        alert("user Does Not Exists");
      }
    });
  