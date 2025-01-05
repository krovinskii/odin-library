document.addEventListener("DOMContentLoaded", function() {
    const dialog = document.querySelector("#userBookInput-dialog");
    const btnOpen = document.querySelector(".open-modal");
    
    btnOpen.addEventListener("click", () => {
        dialog.showModal();
    });
});
//globals
const addBookButton = document.getElementById("userInputBtn");
const searchBar = document.getElementById("userInput");
const formSubmit = document.getElementById("submit");
const titleInput = document.getElementById("bookTitle");
const myLibrary = [];

//send beginning input to dialog
addBookButton.addEventListener("click", () => {
    clearForm();
    titleInput.value = searchBar.value;
})
//create objects 
function Book(title, author, rating, pages, read) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.pages = pages;
    this.read = read;
    }
//clear
const clearForm = () => {
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookRating").value = "";
    document.getElementById("bookPages").value = "";
    const radios = document.getElementsByName("yesno");
    radios[0].checked = true; 
    radios[1].checked = false;
};
    
//get user input
const userValues = document.getElementById("submitBtn").onclick = () => {
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let rating = document.getElementById("bookRating").value;
    let pages = document.getElementById("bookPages").value;

    if (!isNaN(author) || /\d/.test(author)) {
        alert("Please enter a name in the author section");
        return
    }
    if (isNaN(rating) || (rating > 5) || (rating < 0)) {
        alert("Please enter a number between 0 and 5");
        return
    }
    if (isNaN(pages)) {
        alert("Please enter a number in the pages section");
        return
    }

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
    searchBar.value = "";
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
        newRating.textContent = `${myLibrary[i].rating}/5`;
        newRating.classList.add("rating", "userInput")

        const newPages = document.createElement("div");
        newPages.textContent = myLibrary[i].pages;
        newPages.classList.add("pages", "userInput")

        const newRead = document.createElement("div");
        newRead.textContent = myLibrary[i].read;
        newRead.classList.add("read", "userInput")

        const newDeleteEntry = document.createElement("button");
        newDeleteEntry.textContent = "X";
        newDeleteEntry.classList.add("deleteEntry");

        container.appendChild(newTitleContainer);
        newTitleContainer.appendChild(newTitle);
        newTitleContainer.appendChild(newAuthor);
        container.appendChild(newRating);
        container.appendChild(newPages);
        container.appendChild(newRead);
        newRead.appendChild(newDeleteEntry);



    }

}

//remove entry
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('deleteEntry')) {
        const readDiv = e.target.parentElement;
        const titleContainer = readDiv.previousElementSibling.previousElementSibling.previousElementSibling;
        titleContainer.remove();  
        readDiv.previousElementSibling.previousElementSibling.remove();
        readDiv.previousElementSibling.remove();
        readDiv.remove(); 
        myLibrary.pop();
    }
});
