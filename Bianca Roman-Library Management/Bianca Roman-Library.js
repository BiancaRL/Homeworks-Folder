class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }

  displayInfo() {
    console.log(
      `Title: ${this.title}\nAuthor: ${this.author}\nISBN: ${this.ISBN}`
    );
  }
}

class FictionBook extends Book {
  constructor(title, author, ISBN, genre) {
    super(title, author, ISBN);
    this.genre = genre;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Genre: ${this.genre}`);
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  displayBooks() {
    console.log("Library Inventory:");
    this.books.forEach((book, index) => {
      console.log(`\nBook #${index + 1}:`);
      book.displayInfo();
    });
  }

  borrowBook(member, bookIndex) {
    const book = this.books[bookIndex - 1];

    if (book) {
      member.borrowedBooks.push(book);
      this.books.splice(bookIndex - 1, 1);
      console.log(`${member.name} has successfully borrowed "${book.title}".`);
    } else {
      console.log("Invalid book index. Please choose a valid book to borrow.");
    }
  }
}

class LibraryMember {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  displayBorrowedBooks() {
    console.log(`${this.name}'s Borrowed Books:`);
    if (this.borrowedBooks.length === 0) {
      console.log("No books borrowed.");
    } else {
      this.borrowedBooks.forEach((book, index) => {
        console.log(`\nBook #${index + 1}:`);
        book.displayInfo();
      });
    }
  }
}

const library = new Library();

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "978-0618260300");
const fictionBook1 = new FictionBook(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  "978-0590353427",
  "Fantasy"
);
library.addBook(book1);
library.addBook(fictionBook1);

const member1 = new LibraryMember("Ana");
const member2 = new LibraryMember("Mihai");

// Displaying library inventory before borrowing
library.displayBooks();

library.borrowBook(member1, 1);

library.borrowBook(member2, 2);

// Displaying library inventory after borrowing
library.displayBooks();

member1.displayBorrowedBooks();
member2.displayBorrowedBooks();
