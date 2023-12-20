const products = document.getElementById("productBox");


function getData() {
    products.innerHTML = ""
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach((item, index) => {
        let div = document.createElement("div")
        div.className = "boxs"
        div.innerHTML = `
    <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <p>${item.price}</p>
            <button onclick="removeToCart(${index})">Remove To Cart</button>
    
    `
        products.appendChild(div)
    })

}

getData()

function removeToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    getData()
}
