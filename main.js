// Cart  

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active"); // Mag-open yung cart hirr (add)

};

closeCart.onclick = () => {
    cart.classList.remove("active"); // Close cart hirr (remove)

};

// Make the cart work

if (document.readyState ==  'loading'){
    document.addEventListener('DOMContentLoaded', ready)

}else{
    ready();
}

// Functions here

function ready (){

    // Remove items from the cart

    var removeCartButtons = document.getElementsByClassName ('cart-remove')
    console.log(removeCartButtons)

    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        //button.addEventListener('click' removeCartItem)
    } 
}