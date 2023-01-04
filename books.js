let myLibrary = [];

const add_new = document.querySelector('.new_book');
const add_book = document.getElementById('book_form');
const form = document.querySelector('.toggle');

add_new.addEventListener('click', () => {
    form.style.display = "block";
});

add_book.addEventListener('submit', (e) => {
    e.preventDefault();
    new_book = new Book(e.target.title.value, e.target.author.value, e.target.pages.value, e.target.already_read.checked);
    myLibrary.push(new_book);

    e.target.reset();
    form.style.display = "none";
    populateShelves(myLibrary);

    const books = document.querySelectorAll('.delete');
    for ( let del_btn of books )
    {
        del_btn.addEventListener('click', () => {
            myLibrary = removeBook(parseInt(del_btn.id), myLibrary);
            updateID(myLibrary);
        });
    }
});