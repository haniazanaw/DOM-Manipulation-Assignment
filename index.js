
document.body.style.backgroundColor= 'silver';

const title = document.getElementById('title');
title.style.color='green'

const fontCase = document.querySelectorAll('h3');
fontCase.forEach(h3=>{
  h3.style.textTransform = 'uppercase';
});

const fruits = document.getElementById('fruitsList');
const newList = document.createElement('li');
fruits.appendChild(newList);
newList.textContent= 'Apples';

const vegetables = document.getElementById('veggiesList');
const newveg = document.createElement('li');
vegetables.appendChild(newveg);
newveg.textContent = 'Carrots';

fruits.style.display="flex";
fruits.style.flexDirection="wrap";
fruits.style.justifyContent="space-between";
const paragraph = document.querySelector("p")
paragraph.style.fontSize="60px"
paragraph.style.color='green';
const fruit = document.querySelectorAll('#fruitsList li');

const fruitimages = ["images/mangoes.jpg",
                     "images/bananas.jpeg",
                     "images/watermelons.jpg",
                     "images/apples.jpg"]
fruit.forEach((li,index)=>{
  const img = document.createElement("img")
  img.src = fruitimages[index];
  img.className = "fruit-img";
  li.appendChild(img)
})
const veg = document.querySelectorAll('#veggiesList li');
const vegimages = ["images/onions.jpg",
                  "images/tomatoes.webp",
                "images/kales.jpeg",
                "images/carrots.jpg"]
veg.forEach((li,index)=>{
  const imgveg = document.createElement("img")
  imgveg.src = vegimages[index];
  imgveg.className = "veg-img";
  li.appendChild(imgveg)
})
vegetables.style.display="flex"
vegetables.style.justifyContent="space-between"
vegetables.style.marginTop ="50px"

const button = document.getElementById("button");
button.style.border='none';
button.style.borderRadius='20px';
button.style.backgroundColor= "white";
button.style.padding="20px";
button.style.width="240px";
button.style.fontSize="25px"
button.style.cursor="pointer";
button.addEventListener('click',()=>{
  button.textContent="Go Down";
  button.style.backgroundColor= "rgb(215, 243, 215)"
})
button.addEventListener('click', function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' 
  });
});