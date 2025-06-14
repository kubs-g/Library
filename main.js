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

 
const searchButton = document.getElementById('Searchbtn');
searchButton.addEventListener('click', function() {
    const tergetsearch = document.getElementById('searchInput').value.trim();
    const results = linearSearch(Library, 'title',tergetsearch);
    if (results) {
      return alert(`Book found: ${results.title} by ${results.author}, Genre: ${results.genre}`);
    } else {
        console.log("Book not found.");
    }
  function linearSearch(arr,key,value){
    for(let i=0;i<arr.length;i++){
      if(arr[i][key] === value){
        return arr[i]
      }
    }
    return null;
  } 
  }
  );

  