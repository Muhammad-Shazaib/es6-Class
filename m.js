

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

}


let a = 5; //Number
let b = new Book('Harry Potter', 'J.K. Rowling', 'Fiction'); //Object

console.log(b.name);
console.log(b.author);
console.log(b.genre);
