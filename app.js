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

function funTen () {
  console.log(The end of the function sprint)
}

funTen();


