// 1)

const people = [
{ id: 1, name: "Arta" },
{ id: 2, name: "Blerim" },
{ id: 3, name: "Doni" },
{ id: 4, name: "Elira" }
];

const onlyOddPeople = people.filter((person) => person.id % 2 !== 0);

console.log(onlyOddPeople);

// 2) 

const maxNr = ((a,b) =>{
return a > b ? a : b;
})
console.log(maxNr(10, 5));
// 3)

const isLandscape = ((width, height) =>{
    if(width > height){
        return true;
    }
        return false;
})
console.log(isLandscape(1920, 1080));


// 4)

const fizzBuzz = ((input) =>{
    if(typeof input !== "number"){
        return 'Not a Number';
    }
    if(input % 3 === 0 && input % 5 === 0){
        return 'FizzBuzz';
    }
    if(input % 3 === 0){
        return 'Fizz';
    }
    if(input % 5 === 0){
        return 'Buzz';
    }
    return input;
});
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz("hello"));

// 5) 

 const checkSpeed = ((speed) =>{
    const speedLimit = 70;

    if(speed <= speedLimit){
        return 'Ok'
    }
    let points = Math.floor( (speed - speedLimit) / 5);

    if (points >= 12){
        return 'License suspended'
    }
    return points;
 })
console.log(checkSpeed(170));


 // 6)

 const countTruthy = ((array) =>{
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i]){
            count++
        }
    }
    return count;
 })
console.log(countTruthy([0, null, undefined, 2, 3]));

// 7)

const numbers = [1, 3, 5, 6, 7, 9, 10];

const sum = ((numbers)=> {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 || numbers[i] % 5 === 0) {
      total += numbers[i];
    }
  }

  return total;
})
console.log(sum(numbers));

// 8)

const notat = [9, 8, 5, 10];

let shuma = 0;

notat.forEach((nota) => {
  shuma += nota;
});

const mesatarja = shuma / notat.length;

console.log("Shuma:", shuma);
console.log("Mesatarja:", mesatarja);

// 9)

const getNumbersGreaterThan10 = ((numbers) => {
  return numbers.filter((num) => num > 10);
})

console.log(getNumbersGreaterThan10([5, 10, 11, 3, 25, 9, 12]));

// 10 ) 

const formatProductNames = ((products) => {
  return products.map((product) => "Product: " + product);
})

console.log(formatProductNames(["Laptop", "Mouse", "Keyboard"]));