// for navbar part
let btn = document.getElementById("btn2")
btn.addEventListener("click",signin)
function signin(){
    window.location.href = "../../sign_in/login.html"
} 


const product_container = [...document.querySelectorAll(".product_container")];
const nextBtn = [...document.querySelectorAll(".next_btn")];
const preBtn = [...document.querySelectorAll(".pre_btn")];

product_container.forEach((item, i) => {
  let containerdimantion = item.getBoundingClientRect();
  let containerWidth = containerdimantion.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// last_elemient

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "hide";
    moreText.style.display = "inline";
  }
}


// for footer part
function sub(){
    let email = document.getElementById("email").value
    // console.log(value(email))
    if(email==""){
        alert("Please enter email")
    }
    else if(!email.includes("@")){
        alert("Please enter a valid email")
    }
    else{
        alert("Email Subscribed Succesfully")
    }
}
let cart = ()=>{
  window.location.href = "../../fw19_1274/cart/cart.html"
}

let product = ()=>{
  window.location.href = "../../product/productpage.html"
  console.log("hello")
}