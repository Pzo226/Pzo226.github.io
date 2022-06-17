//// String Numbers Boolean, null, undefined, symbol (is added i es6)
////let, const,


//const name = 'john';
//const age = 30 
//// a number is a number with no qoutes around it 
//const iscool = true 
//// no qoutes which is a boolean 
////put qoutes around it its going to be a string 

//const rating = 4.5 
//const x = null;
//// means its basically empty the is a variable but there nothing in it 
//const y = undefined 
//// whitch we can explicitly define 
////i can explictly define  or we can initalize somthing but we would have to use let 
//let z;

//console.log(typeof x);
//// basic variable types 

//const name = 'john';
//const age = 30;
 
//// Concatenation 
//// say i want to create a variable with a string
//console.log('my name is a namr i am a age')
//// where we want the variable we can end the string and then use  the plus sign to concatenate on that variable 
//console.log(' my name is ' + name + ' and i am ' + age);

// Arrays - variables that hold multiple values 

//const fruits = ['apples', 'oranges', 'pears'];
//console.log(fruits);

// say we want to just access one of these fruits 
//const fruits = ['apples', 'oranges', 'pears'];
//console.log(fruits[1]);
// arrays are 0 based (counted 0.1.2.3.ect...ect)

//const fruits = ['apples', 'oranges', 'pears'];
//fruits[3] = 'grapes';

//fruits.push('mangos');
//fruits.unshift('strawberries');
//fruits.pop();

//console.log(fruits);
// this is munipulating it 
// is you want to check to see if something is a array
 
//console.log(Array.isArray(fruits));
// if you want to get the index of something 
//console.log(fruits.indexOf('oranges'))


// object litterals 
//const person = {
//  firstName: 'john',
//  LastName: 'doe',
//  age: 30,
//  hobbies: ['music', 'moveies', 'sports'],
//  address: {
//    street: '50 main st',
//    city: 'boston',
//    state: 'MA',
//  }
//}

//console.log(person)

// if you want access a single value we use the dot sintacs you can also log more than one thing using a coma 

//console.log(person.firstName, person.LastName)

//console.log(person.hobbies[1])

// if we want these as actuall variables we can pull these out 

//const { firstName, LastName, address: {city} } = person;
//console.log(city);

// you can also directly add properties

//person.email = 'john@gmail.com';
//console.log(person)
// Arrays use brackets 

//const todos = [
//  {
//    id: 1,
//    text: 'take out the trash',
//    isCompleted: true
//  },
//  {
//    id: 2,
//    text: 'meeting with boss',
//    isCompleted: true
//  },
//  {
//    id: 3,
//    text: 'dentist appointment',
//    isCompleted: false
//  }
//];

//console.log(todos[1].text)
//^^ grabing meeting with bosss 

// json is a data format it is ussusally used for full stack development and using APIs when your sending data to a server you ussually send it in json format and receive it in json format it is very similar to object litterals 
// use a json formator 
// no single qoutes in json they will give us an error  

//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON)
// ^^ this is how we would send data to a server

//const todos = [
//  {
//    id: 1,
//    text: 'take out the trash',
//    isCompleted: true
//  },
//  {
//    id: 2,
//    text: 'meeting with boss',
//    isCompleted: true
//  },
//  {
//    id: 3,
//    text: 'dentist appointment',
//    isCompleted: false
//  }
//];

// For (loops)
//for(let i = 0; i < 10; i++) {
//  console.log(`For Loop Number: ${1}`);
//}

// while (loops)
// setting the variable outside the loop
//let i = 0;
//while(i < 10){
//  console.log(`while Loop Number: ${1}`);
//  i++

//}
// ^^ make sure you incrament the i if you dont this will be a never ending loop 

//for(let todo of todos) {
//  console.log(todo)
//}

// forEach (which just loops through them), map (which allow us to create a new array from a array) filter (which allows us to create a new array based on a condition)

//const todos = [
//  {
//    id: 1,
//    text: 'take out the trash',
//    isCompleted: true
//  },
//  {
//    id: 2,
//    text: 'meeting with boss',
//    isCompleted: true
//  },
//  {
//    id: 3,
//    text: 'dentist appointment',
//    isCompleted: false
//  }
//];
// ForEach
//todos.forEach(function(todo) {
//  console.log(todo.text)
//});

//map 
//const todoText = todos.map(function(todo) {
//  return todo.text;
//});
// this is going to return a new array of just the text 

//console.log(todoText)

//const todoCompleted = todos.filter(function(todo) {
//  return todo.isCompleted === true
//}).map(function(todo) {
//  return todo.text;
//})

//console.log(todoCompleted)



// basic if variables 

//const x = 10;

//if(x == 10) {
//  console.log('x is 10'); 

//}
// if we use double == it will not match the data types just the values 
// === matches the data types 


// else, else if, 
//const x = 20;
//const y = 10;
//
//
//if(x > 5 || y > 10 ) {
//  console.log('x is 10'); 
//
//} else if(x > 10) {
//  console.log('x is greater than 10');
//}
//else {
//  console.log('x less than 10')
//}

// or is presented with double pipe characters; one has to be true 
// && represents and with and both have to be true 
//const x = 20;
//const y = 11;


//if(x > 5 && y > 10 ) {
//  console.log('x is more than 5 or y is more than 10 '); 
//
//}


//const x = 10;

//const color = x > 10 ? 'red' : 'blue'; 

//console.log(color)

// then = ? is the ternerary operator 
// else is represented with a colun 

// switches which are another way to evaluate a condition

const x = 10;

const color = x > 10 ? 'red' : 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
    break; 
    case 'blue':
      console.log('color is blue');
      default: 
      console.log('color is not red or blue')
      break;
}










  

