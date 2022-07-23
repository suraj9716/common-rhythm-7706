// for navbar part
let btn = document.getElementById("btn2")
btn.addEventListener("click",signin)
function signin(){
    window.location.href = "login.html"
} 


//getting product data from productpage (through local storage) and update it on product_deatail page
let prodInfo=JSON.parse(localStorage.getItem("moveitems"));
console.log(prodInfo)
displayData(prodInfo);
function displayData(data){
    data.forEach((ele)=>{
        let images=ele.images.split("|");
        console.log(images);
        document.querySelector("#big_img > img").src=images[0];
        document.querySelector("#left_SImg > img:nth-child(1)").src=images[1];
        document.querySelector("#left_SImg > img:nth-child(2)").src=images[2];
        document.querySelector("#left_SImg > img:nth-child(3)").src=images[3];
        document.querySelector("#left_SImg > img:nth-child(4)").src=images[4];
        document.querySelector("#price > #title").innerText=ele.title;
        document.querySelector("#price > #prod_price").innerText=`$ ${ele.variant_price}`;
        document.querySelector("#selection > .color").innerText=`Color: ${ele.actual_color}`
    });   
}

// pop_up closed checkout box && pushing data in local storage
let prod_details = JSON.parse(localStorage.getItem("prod_details")) || [];
function checkoutBox(){
    document.querySelector("#check_pop").style.display="block";
    prod_details=[];
    let image=document.querySelector("#big_img > img").src;
    let name=document.querySelector("#price > #title").innerText;
    let price=document.querySelector("#price > #prod_price").innerText; 
    let color=document.querySelector("#selection > .color").innerText; 
    let fit=document.querySelector("#selection > #fit > p").innerText;
    let size=document.querySelector("#selection > #size").value;
    let quantity=document.querySelector("#selection > #quant").value;
    console.log(image,name,price,color,fit,size,quantity);
    let prod_info=new ProductInfo(image,name,price,color,fit,size,quantity);
    console.log(prod_info);
    prod_details.push(prod_info);
    localStorage.setItem("prod_details",JSON.stringify(prod_details))

    // update values on popup checkout box
    document.querySelector("#check_pop > span").innerText=`${quantity} item added to your basket`;
    document.querySelector("#update_pop > img").src=image;
    document.querySelector("#update_pop > div > p:nth-child(1)").innerText=name;
    document.querySelector("#update_pop > div > p:nth-child(2)").innerText=price;
    document.querySelector("#update_pop > div > p:nth-child(3)").innerText=color;
    document.querySelector("#update_pop > div > p:nth-child(4)").innerText=`Size: ${size}`;
}
function ProductInfo(i,n,p,c,f,s,q){
    this.image=i;
    this.name=n;
    this.price=p;
    this.color=c;
    this.fit=f;
    this.size=s;
    this.quantity=q;
}


// closing opened checkout box 
let cross=document.querySelector("#cross").addEventListener("click",closeCheckout)
    function closeCheckout(){
         document.querySelector("#check_pop").style.display="none";
    }


//redirected to cart page 
let ckeckout=document.querySelector("#checkout_btn").addEventListener("click",function(){
    window.location.href="cart.html"
})


// open close the shippin and return information
let shipping_return=document.querySelector("#ship_return > h4").addEventListener("click", closeOpenInfo);
    let ship=document.querySelector("#ship_return > #shipping ");
    let ret=document.querySelector("#ship_return > #return");
    function closeOpenInfo(){
        if(ship.style.display=="none" && ret.style.display=="none")
        {
            ship.style.display="block";
            ret.style.display="block";
        }
        else
        {
            ship.style.display="none";
            ret.style.display="none"
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
    
