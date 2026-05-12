// Arrow Functions:

//Function Declaration
/*
function greet(){
    return 'Hello World'
}
greet();

// 2) Function Expression
const greet2 = function(){
    return 'Hello World'
}
// 3) Arrow Function

const greet3 = () => 'Hello World'

// ----
function add(a,b){
    return a*b
}

const add  = (a,b) => a*b



// Rules: 

// No parameters:
const greet3 = () => 'Hello world',

// We have parameters:
const add = (a,b) => a*b

// One parameter
function hello(name){
    return `hello ${name};`
}

const hello = name => `hello ${name}`

// Multi line:

const describe = (user) => {
    const greeting = `hello ${user.name}`
    const age = `your age ${user.age}`

    return greeting + age;
}
//1)
const sayHi = () => 'Hi'

// 2)
const add = (a,b) => a+b

// 3)
const square = n => n*n

//5) 
const isEven = num => n% 2 === 0

// 6)

const repeat = str => str + str

prices.forEach((prices) => console.log(prices));
prices.forEach((prices) => total += prices);

users.forEach((user) => {
     console.log('Checking user: ' + user.id);
})
*/

// .forEach --> Do something FOR EACH item (no rturn)
// map --> Transform each item into a new one (a new array)
// filter --> keeps only items that pass a test (a new array)


const numbers = [1,2,3,4];

// 2, 4, 6, 8,

const double = numbers.map((nr) => nr * 2)
console.log(numbers);
console.log(double);

const users = [
    {name: 'Arti', age: 30},
    {name: 'Leo', age: 21}
]


const names = users.map((user) => user.name)
console.log(names)



// .filter

const ages = [12,18,25,7,50];

const adults = ages.filter((age) => age >= 18)
console.log(adults)

const users2 = [
    {name: 'Arti', isActive: true},
    {name: 'Leo', isActive: false},
    {name: 'Besniku', isActive: true}
]

// duke perdorur .filter -> mbushe nje array te ri
// activeUsers me userat te cilet jane aktiv 

    
    
const activeUsers = users.filter((user) => user.isActive).map((user) => user.name.toUpperCase());
console.log(activeUsers);

// 2) 
// duke perdorur .filter -> mbushe nje array te ri 
// evenNumbers me numrat qe jane cift
    const numbers3 = [12,18,25,7,50];
    
    const evenNumbers = numbers3.filter((even) => even % 2 === 0);
    console.log(evenNumbers)


    const products = [
        {name: 'Mouse', price: 20},
        {name: 'Keyboard', price: 80},
        {name: 'Monitor', price: 100},
    ]

    // Filtroj dhe shfaqi vetem produktet qe jane me lir se 100
    // dhe shfaqi vetem emrat (duke perdoru.map)

    const cheap = products.filter((product) => product.price < 100).map((product) => product.name)
    console.log(cheap)

   