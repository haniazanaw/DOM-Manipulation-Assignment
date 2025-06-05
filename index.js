
document.body.style.backgroundColor= 'silver';

const title = document.getElementById('title');
title.style.color='green'
title.style.fontSize='150px';
title.style.fontFamily=''

const fontCase = document.querySelectorAll('h3');
fontCase.forEach(h3=>{
  h3.style.textTransform = 'uppercase';
  h3.style.fontSize='60px';
  h3.style.marginLeft='43%';
});

const fruits = document.getElementById('fruitsList');
const newfruit = document.createElement('li');
fruits.appendChild(newfruit);
newfruit.textContent= 'Apples';




const vegetables = document.getElementById('veggiesList');
const newveg = document.createElement('li');
vegetables.appendChild(newveg);
newveg.textContent = 'Carrots';

fruits.style.justifyContent="space-between"
fruits.style.display="flex";


const paragraph = document.querySelector("p")
paragraph.style.fontSize="60px"

const fruit = document.querySelectorAll('#fruitsList li');
const fruitimages = ["images/mangoes.jpg",
                     "images/bananas.jpeg",
                     "images/watermelons.jpg",
                     "images/apples.jpg"]
fruit.forEach((li,index)=>{
  const imgfruit = document.createElement("img")
  imgfruit.src = fruitimages[index];
  imgfruit.className = "fruit-img";
  li.appendChild(imgfruit)
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
vegetables.style.marginTop ="100px"
vegetables.style.marginBottom='100px'



const fruitsList=document.getElementById("fruitsList");
fruitsList.style.fontSize='40px';


const veggiesList=document.getElementById("veggiesList");
veggiesList.style.fontSize='40px';




const button=document.getElementById('click-button')
button.style.background='white'
button.style.border = 'none'
button.style.backgroundColor = 'coral'
button.style.borderRadius = '20px'
button.style.color = 'white'
button.style.fontSize = "30px"
button.style.cursor = 'pointer'
button.style.marginTop = "40px"
button.style.width = '250px'
button.style.height = '90px'
button.style.marginBottom = "5%"
button.style.marginLeft='40%'
button.addEventListener('click',()=>{
    button.style.backgroundColor='brown'
    button.textContent='Successful'})
    button.onclick=()=>{           
    
    }





