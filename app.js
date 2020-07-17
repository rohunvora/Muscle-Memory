let stringy = "Rohun";
console.log(stringy);

let numero = 3;
console.log(numero);

let arrayz = [1, 2, 3, 4, 5, 6, 7]
console.log(arrayz);

let thisWorks = true;
console.log(thisWorks);

let car = {
  name: "Toyota Camry",
  license: 489302,
  wheels: [1, 2, 3, 4],
  carWorks: true
}

console.log(car);

// 10 functions

function funOne (array) {
  console.log(array)
}
funOne(arrayz);

function funTwo (callback) {
  console.log(callback)
}

funTwo(funOne);

function funThree (string) {
  console.log(string)
}

funThree(stringy);

function funFour(obj) {
  console.log(obj)
}
funFour(car);

function funFive(bool) {
  console.log(bool);
}

funFive(thisWorks);

function funSix(number) {
  console.log(number)
}

funSix(numero);

function funSeven() {
  setInterval(funSeven, 1000)
}

let num1 = 8
let num2 = 9

function funEight(num1, num2) {
  if(num1 > num2) {
    console.log(num1)
  } else {
    console.log(num2)
  }
}

function funNine (array) {
  let newArray = array.split;
  console.log(newArray)
}

funNine(arrayz)


const sectionOne = document.querySelector('#section-one');
console.log(sectionOne)

const sectionTwo = document.querySelector('#section-two');
console.log(sectionTwo)

const sectionThree = document.querySelector('#section-three');
console.log(sectionThree);

const sectionFour = document.querySelector('#section-four');
console.log(sectionFour);

const sectionFive = document.querySelector('#section-five');
console.log(sectionFive);


sectionOne.textContent = "Lakers";
sectionTwo.textContent = "Warriors";
sectionThree.textContent = "Celtics";
sectionFour.textContent = "Nets";
sectionFive.textContent = "Blazers";

const paraOne = document.querySelector('.paragraph-one');
paraOne.textContent = 'LeBron James';

const paraTwo = document.querySelector('.paragraph-two');
paraTwo.textContent = 'Stephen Curry';

const paraThree = document.querySelector('.paragraph-three');
paraThree.textContent = 'Jayson Tatum';

const paraFour = document.querySelector('.paragraph-four');
paraFour.textContent = 'Kyrie Irving';

const paraFive = document.querySelector('.paragraph-five');
paraFive.textContent = 'Damian Lillard';

const containerSix = document.createElement('div');

const sectionSix = document.createElement('h2');
sectionSix.setAttribute('id', 'section-six');
sectionSix.textContent = "Rockets";

const paraSix = document.createElement('p');
paraSix.classList.add('paragraph-six');
paraSix.textContent = "James Harden";

const body = document.querySelector('body');

body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
containerSix.appendChild(paraSix);


const containerSeven = document.createElement('div');

const sectionSeven = document.createElement('h2');
sectionSeven.setAttribute('id', 'section-seven');
sectionSeven.textContent = "Mavericks";

const paraSeven = document.createElement('p');
paraSeven.classList.add('paragraph-seven');
paraSeven.textContent = "Luka Doncic";

body.appendChild(containerSeven);
containerSeven.appendChild(sectionSeven);
containerSeven.appendChild(paraSeven);
