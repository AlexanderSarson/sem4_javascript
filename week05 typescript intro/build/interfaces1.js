"use strict";
// a Create a TypeScript interface IBook, which should encapsulate information about a book
{
    let book = {
        title: "Harry Potter",
        author: "J.K.Rowling",
        published: new Date(),
        pages: 443
    };
    // b Create a function that takes an IBook instance and test it with an object instance.
    const testBookWithObj = (book) => {
        if (book instanceof Object)
            return true;
        return false;
    };
    console.log(testBookWithObj(book));
}
// c Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
/*
Duck typing betyder at selve typen eller klassen af et objekt er ligemeget,
men at man i stedet tjekker at der en given variable eller funktion på objektet
*/
// d Change the interface to make published and pages become optional - Verify the new behaviour.
{
    let book = {
        title: "Harry Potter",
        author: "J.K.Rowling"
    };
    let book2 = {
        title: "Harry Potter",
        author: "J.K.Rowling",
        pages: 443
    };
}
// e) Change the interface to make author readonly - Verify the new behaviour.
{
    let book = {
        title: "Harry Potter",
        author: "J.K.Rowling"
    };
    //book.author = "test";
}
// f) Create a class Book and demonstrate the "Java way" of implementing an interface.
{
    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
    }
    const book = new Book("Harry Potter", "J.K. Rowling");
    console.log("f: ", book);
    book.pages = 300;
    console.log("f: ", book);
}
//# sourceMappingURL=interfaces1.js.map