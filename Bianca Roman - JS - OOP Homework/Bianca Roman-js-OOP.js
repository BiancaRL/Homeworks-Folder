function Book(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
  
  Book.prototype.displayInfo = function () {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nISBN: ${this.ISBN}`);
  };
  
  function FictionBook(title, author, ISBN, genre) {
    Book.call(this, title, author, ISBN);
    this.genre = genre;
  }
  
  FictionBook.prototype = Object.create(Book.prototype);
  FictionBook.prototype.constructor = FictionBook;
  
  FictionBook.prototype.displayInfo = function () {
    Book.prototype.displayInfo.call(this);
    console.log(`Genre: ${this.genre}`);
  };
  
  function Library() {
    this.books = [];
  }
  
  Library.prototype.addBook = function (book) {
    this.books.push(book);
  };
  
  Library.prototype.displayBooks = function () {
    console.log('Library Inventory:');
    this.books.forEach((book, index) => {
      console.log(`\nBook #${index + 1}:`);
      book.displayInfo();
    });
  };
  
  Library.prototype.borrowBook = function (member, bookIndex) {
    const book = this.books[bookIndex - 1];
  
    if (book) {
      member.borrowedBooks.push(book);
      this.books.splice(bookIndex - 1, 1);
      console.log(`${member.name} has successfully borrowed "${book.title}".`);
    } else {
      console.log('Invalid book index. Please choose a valid book to borrow.');
    }
  };
  
  function LibraryMember(name) {
    this.name = name;
    this.borrowedBooks = [];
  }
  
  LibraryMember.prototype.displayBorrowedBooks = function () {
    console.log(`${this.name}'s Borrowed Books:`);
    if (this.borrowedBooks.length === 0) {
      console.log('No books borrowed.');
    } else {
      this.borrowedBooks.forEach((book, index) => {
        console.log(`\nBook #${index + 1}:`);
        book.displayInfo();
      });
    }
  };
  
  const library = new Library();
  
  const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '978-0618260300');
  const fictionBook1 = new FictionBook('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '978-0590353427', 'Fantasy');
  library.addBook(book1);
  library.addBook(fictionBook1);
  
  const member1 = new LibraryMember('Ana');
  const member2 = new LibraryMember('Mihai');
  
  // Displaying library inventory before borrowing
  library.displayBooks();
  
  library.borrowBook(member1, 1);
  
  library.borrowBook(member2, 2);
  
  // Displaying library inventory after borrowing
  library.displayBooks();
  
  member1.displayBorrowedBooks();
  member2.displayBorrowedBooks();