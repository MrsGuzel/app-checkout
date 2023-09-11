// const taxRate = 0.18;
// const shippingPrice = 25.99;
// const FreeShippingPrice = 3000;

window.addEventListener("load", () => {
    // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("FreeShippingPrice", FreeShippingPrice);
});

const navbarList = document.querySelector(".nav__list");
const productList = document.querySelector("div.main__product-painel");

navbarList.addEventListener("click", () => {
    if(e.target.getAttribute("class")== "nav__list--btn"){
        // e.target.parentElement.firstElementChild.innerText = "My Card";
        // e.target.previousElementSibling.innerText = "My Card";
        
        productList.innerHTML ="No Product!"
        e.currentTarget.firstElementChild.innerText = "My Card";
        // productList.childNodes.forEach(product => {
        //     product.remove()
        // })

    }
})
