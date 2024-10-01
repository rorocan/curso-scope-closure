// variables

var a;  //declarando
var b = b; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeeclaracion 


//Global Scope
var fruit = 'Orange'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Peru';
    console.log(country);
}

countries();