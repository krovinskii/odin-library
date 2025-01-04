document.addEventListener("DOMContentLoaded", function() {
    const dialog = document.querySelector("#userBookInput-dialog");
    const btnOpen = document.querySelector(".open-modal");
    
    btnOpen.addEventListener("click", () => {
        dialog.showModal();
    });
});
const addBookButton = document.getElementById("userInputBtn");
const userInputHTML = document.getElementById("userInput");
const formSubmit = document.getElementById("submit");
const myLibrary = [];

function Book(title, author, rating, pages, read) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.pages = pages;
    this.read = read;
    }
    
//get user input
const userValues = document.getElementById("submitBtn").onclick = () => {
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let rating = document.getElementById("bookRating").value;
    let pages = document.getElementById("bookPages").value;

    let read = true;
    const radios = document.getElementsByName("yesno");
    for (const radio of radios) {
        if (radio.checked) {
            read = radio.value === "Yes"; 
            break;
        }
    }
    if (read === true) {
        read = "Yes, read";
    }
    else {
        read = "No, have not read."
    }

    console.log(title + author + rating + pages + read);
    
    const userBook = new Book(title, author, rating, pages, read);
    myLibrary.push(userBook);
    console.log(myLibrary);
    addBookToLibrary();
    return myLibrary;
}
const addBookToLibrary = () => {
    for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
        const container = document.getElementById("userBooks");

        const newTitleContainer = document.createElement("div");
        newTitleContainer.classList.add("titleContainer", "userInput")

        const newTitle = document.createElement("div");
        newTitle.textContent = myLibrary[i].title;
        newTitle.classList.add("title");

        const newAuthor = document.createElement("div");
        newAuthor.textContent = myLibrary[i].author;
        newAuthor.classList.add("author");

        const newRating = document.createElement("div");
        newRating.textContent = `${myLibrary[i].rating}/ 5`;
        newRating.classList.add("rating", "userInput")

        const newPages = document.createElement("div");
        newPages.textContent = myLibrary[i].pages;
        newPages.classList.add("pages", "userInput")

        const newRead = document.createElement("div");
        newRead.textContent = myLibrary[i].read;
        newRead.classList.add("read", "userInput")

        container.appendChild(newTitleContainer);
        newTitleContainer.appendChild(newTitle);
        newTitleContainer.appendChild(newAuthor);
        container.appendChild(newRating);
        container.appendChild(newPages);
        container.appendChild(newRead);



    }

}




////Need to add "Read?" functionality. Need to add checks for characters, number length, etc.