
const fruitData = [
    { name: "Mangoes", img: "images/mangoes.jpg" },
    { name: "Bananas", img: "images/bananas.jpeg" },
    { name: "Water Melons", img: "images/watermelons.jpg" },
    { name: "Apples", img: "images/apples.jpg" }
];

const vegData = [
    { name: "Onions", img: "images/onions.jpg" },
    { name: "Tomatoes", img: "images/tomatoes.webp" },
    { name: "Kales", img: "images/kales.jpeg" },
    { name: "Carrots", img: "images/carrots.jpg" }
];

const title = document.getElementById('title');
title.style.color='green'
title.style.fontSize='70px'
title.style.textAlign='center';

const fontCase = document.querySelectorAll('h3');
fontCase.forEach(h3=>{
  h3.style.textTransform = 'uppercase';
  h3.style.fontSize='30px';
  h3.style.marginLeft='43%';
});




function renderList(dataArray, listId) {
    const ul = document.getElementById(listId);
    ul.innerHTML = "";

    dataArray.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.img;
        img.className = "item-img";

        const nameSpan = document.createElement('span');
        nameSpan.className = "item-name";
        nameSpan.textContent = item.name;

        const btn = document.createElement('button');
        btn.className = "add-to-cart";
        btn.textContent = "Add to Cart";
        btn.onclick = function() {
            cartCount++;
            cartItems.push(item.name);
            updateCart();
        };

        li.appendChild(img);
        li.appendChild(nameSpan);
        li.appendChild(btn);
        ul.appendChild(li);
    });
}

let h3s = document.getElementsByClassName("section-title");
for (let i = 0; i < h3s.length; i++) {
    h3s[i].style.textTransform = "uppercase";
    h3s[i].style.marginLeft= "30%";
}

renderList(fruitData, "fruList");
renderList(vegData, "vegList");

let = cartItems=[]
let cartCount = 0;
function updateCart() {
    document.getElementById("cart-count").textContent = cartCount;
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cartItems.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        cartList.appendChild(li);
    });
}

document.getElementById("cart-icon").addEventListener("click", function() {
    const details = document.getElementById("cart-details");
    details.classList.toggle("hidden");
});


document.getElementById("search-bar").addEventListener("input", function() {
    let search = this.value.toLowerCase();
    const filteredFruits = fruitData.filter(item => item.name.toLowerCase().includes(search));
    renderList(filteredFruits, "fruList");

    const filteredVeg = vegData.filter(item => item.name.toLowerCase().includes(search));
    renderList(filteredVeg, "vegList");

    let fruitBtns = document.getElementById("fruList").getElementsByClassName("add-to-cart");
    for (let btn of fruitBtns) btn.onclick = function() { cartCount++; updateCart(); };
    let vegBtns = document.getElementById("vegList").getElementsByClassName("add-to-cart");
    for (let btn of vegBtns) btn.onclick = function() { cartCount++; updateCart(); };
});

document.body.style.backgroundColor = "silver";
document.getElementById("nav-title").style.color = "green";