
const fruits = [
  { name: 'Mangoes', emoji: '🥭' },
  { name: 'Bananas', emoji: '🍌' },
  { name: 'Water Melons', emoji: '🍉' },
  { name: 'Pineapples', emoji: '🍍' } 
];

const vegetables = [
  { name: 'Onions', emoji: '🧅' },
  { name: 'Tomatoes', emoji: '🍅' },
  { name: 'Kales', emoji: '🥬' },
  { name: 'Carrots', emoji: '🥕' } 
];


let cart = [];


function renderList(data, listId, type) {
  const ul = document.getElementById(listId);
  ul.innerHTML = '';
  data.forEach(item => {
    const li = document.createElement('li');
    li.className = 'item-card';
    li.innerHTML = `
      <span class="item-emoji">${item.emoji}</span>
      <span class="item-name">${item.name}</span>
      <button class="add-btn">Add</button>
    `;
    li.querySelector('.add-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart({ ...item, type });
    });
    ul.appendChild(li);
  });
}


function addToCart(item) {
  cart.push(item);
  updateCart();
  showCartDropdown();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  showCartDropdown();
}

function updateCart() {
  document.getElementById('cart-count').textContent = cart.length;
}


function showCartDropdown() {
  const dropdown = document.getElementById('cart-dropdown');
  dropdown.innerHTML = '';
  if (cart.length === 0) {
    dropdown.innerHTML = `<div class="cart-empty">Cart is empty!</div>`;
  } else {
    cart.forEach((item, i) => {
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <span class="cart-item-emoji">${item.emoji}</span>
        <span>${item.name}</span>
        <button class="remove-btn">Remove</button>
      `;
      row.querySelector('.remove-btn').addEventListener('click', () => removeFromCart(i));
      dropdown.appendChild(row);
    });
  }
}


document.getElementById('cart-container').addEventListener('click', function (e) {
  e.stopPropagation();
  const dropdown = document.getElementById('cart-dropdown');
  dropdown.classList.toggle('hidden');
});


document.body.addEventListener('click', function () {
  document.getElementById('cart-dropdown').classList.add('hidden');
});


document.getElementById('searchBox').addEventListener('input', function () {
  const query = this.value.trim().toLowerCase();
  const filteredFruits = fruits.filter(item => item.name.toLowerCase().includes(query));
  const filteredVeg = vegetables.filter(item => item.name.toLowerCase().includes(query));
  renderList(filteredFruits, 'fruList', 'fruit');
  renderList(filteredVeg, 'vegList', 'vegetable');
});


const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});


renderList(fruits, 'fruList', 'fruit');
renderList(vegetables, 'vegList', 'vegetable');
updateCart();
showCartDropdown();


window.addEventListener('resize', () => {
  document.getElementById('cart-dropdown').classList.add('hidden');
});