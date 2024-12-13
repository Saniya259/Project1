const items=document.querySelectorAll(".add-to-cart");
items.forEach(button =>{
    button.addEventListener("click",() =>{
        alert('Your items are added to cart');

    });
});