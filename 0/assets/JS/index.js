const products = document.getElementById("products");
const btn = document.getElementById("next");

let page = 1
let limit = 3


btn.addEventListener("click", getApi)
async function getApi() {
    let skip = (page - 1) * limit
    await axios.get(`https://655c3300ab37729791aa0bf5.mockapi.io/students/products?page=${page}&limit=${limit}&skip={skip}`)
        .then(res => {
            db = res.data
            db.forEach((item) => {
                let div = document.createElement("div")
                div.className = "box"
                div.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <p>${item.price}</p>
            <button onclick="addToCart(${item.id})">Add To Cart</button>
            `
            products.appendChild(div)
            })

        })
        .catch(error => console.log(error))
}
getApi()

 function addToCart (index) {
     let cart = JSON.parse (localStorage.getItem ("cart")) || [];
    cart.push(db.find(item => item.id == index));
    localStorage.setItem("cart",JSON.stringify (cart));
    
 }