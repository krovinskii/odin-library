const addBookButton = document.getElementById("userInputBtn");
const userInputHTML = document.getElementById("userInput");

document.addEventListener("DOMContentLoaded", function() {
    const dialog = document.querySelector("#userBookInput-dialog");
    const btnOpen = document.querySelector(".open-modal");
    
    btnOpen.addEventListener("click", () => {
        dialog.showModal();
    });
});

const userLibrary = [];

function Book(title, author, rating, pages) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.pages = pages;
};

function addBookToLibrary() {
    const titleInput = document.getElementById("#bookTitle");
    const authorInput = document.getElementById("bookAuthor");
    const ratingInput = document.getElementById("#bookRating");
    const pagesInput = document.getElementById("#bookPages");
    const readInput = document.getElementsByName("yesno");
};