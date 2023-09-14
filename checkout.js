// const taxRate = 0.18;
// const shippingPrice = 25.99;
// const FreeShippingPrice = 3000;

window.addEventListener("load", () => {
    // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("FreeShippingPrice", FreeShippingPrice);
    calculateCartPrice();
});

const navbarList = document.querySelector(".nav__list");
const productList = document.querySelector("div.main__product-painel");

navbarList.addEventListener("click", (e) => {
    if(e.target.getAttribute("class") == "nav__list--btn" || "fa-regular fa-trash-can"){
        // e.target.parentElement.firstElementChild.innerText = "My Card";
        // e.target.previousElementSibling.innerText = "My Card";
        
        productList.innerText ="No Product!"
        e.currentTarget.firstElementChild.innerText = "My Card";
        calculateCartPrice();
        

    }
});

productList.addEventListener("click", (e) => {
    //minus
    if(e.target.className == "fa-solid fa-minus"){
        if( e.target.nextElementSibling.innerText > 1){
        calculateProductPrice(e.target)
        e.target.nextElementSibling.innerText --;
        }else{
            if(confirm(`${e.target.closes(".main__product-info".querySelector ("h2").innerText)} wil be removed`)){
                e.target.closest(".main__product").remove()
                calculateCartPrice()
            }
        }
       
    }
    //plus
    else if(e.target.classList.contains("fa-plus")){
        e.target.previousElementSibling.innerText ++;
        calculateProductPrice(e.target)
    }
    //remove
    else if(e.target.id == "remove-product"){
        if(confirm(`${e.target.closes(".main__product-info".querySelector ("h2").innerText)} wil be removed`)){
            e.target.closest(".main__product").remove()
            calculateCartPrice();
        }
    }
    else{
        alert("other element clicked")
    }
    
})

const calculateProductPrice = () => {
    // product line calculations
    
}
const calculateCartPrice = () => {
    // cart total  calculations

}
