class Book {
    constructor(title, author, genre) {
      this.title = title;
      this.author = author;
      this.genre = genre;
    }
  }
  
  const Library = [];
  
  
  const addBook = (event) => {
    event.preventDefault();
  
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const genre = document.getElementById("genre").value.trim();
  
    if (!title || !author || !genre) {
      alert("Please fill in all fields before adding a book.");
      return;
    }else if(Library.some(book => book.title.toLowerCase() === title.toLowerCase())) {
        alert("This book already exists in the library.");
        return;
        }
  
    const newBook = new Book(title, author, genre);
    Library.push(newBook);
    displayBooks(); 
    document.getElementById("add-bookForm").reset(); 
  };
  
  // Function to display books
  const displayBooks = () => {
    const bookList = document.getElementById("books-list");
    bookList.innerHTML = ""; 
    Library.forEach((book) => {
      const bookItem = document.createElement("li");
      bookItem.innerHTML = `
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Genre: ${book.genre}</p>`;
      bookList.appendChild(bookItem);
    });
  };
  
  
  
  document.getElementById("add-bookForm").addEventListener("submit", addBook);
