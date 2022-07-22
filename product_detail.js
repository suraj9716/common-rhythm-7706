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
   

    
