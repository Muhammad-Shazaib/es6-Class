

//data type constructor
// In JavaScript, every data type has a constructor function that is used to create instances of that type.
// For example, the Number type has a constructor function that can be used to create number objects
class Book {
    constructor(name, author, genre) {
        console.log('this type is getting constructed');
        this.name = name;
        this.author = author;
        this.genre = genre;
    }
 static sold = 5
 static viewIncrement() {
     console.log('a view is incremented');
 }
}


let a = 5; //Number
let b = new Book('Harry Potter', 'J.K. Rowling', 'Fiction'); //Object

console.log(b.name);
console.log(b.author);
console.log(b.genre);
console.log(Book.sold); // static method call
console.log(Book.viewIncrement); // static method call


function Foo() {  // named function
    console.log('This is a named function');
}


let zee = function () {  // anonymous function
    console.log('This is an anonymous function');
};




class Risala extends Book {
    constructor(name, author, genre, weekNumber, com) {
        console.log('this type is getting constructed');
        super(name, author, genre); // Call the parent class constructor
       
        this.author = author;
        this.week = weekNumber;
        this.company = com;
    }

}

let abc = new Risala('Risala', 'J.K. Rowling', 'politics', 2, 'express');
console.log(abc.genre);