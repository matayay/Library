let myLibrary = [];

const add_new = document.querySelector('.new_book');
const add_book = document.getElementById('book_form');
const form = document.querySelector('.toggle');

add_new.addEventListener('click', () => {
    form.style.display = "block";
});

add_book.addEventListener('submit', (e) => {
    e.preventDefault();
    let new_book = new Book(e.target.title.value, e.target.author.value, e.target.pages.value, e.target.already_read.checked);
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

    const my_books = document.querySelectorAll('.read_btn');
    for ( let book of my_books )
    {
        book.addEventListener('click', () => {
            myLibrary[parseInt(book.id)].toggleReadStatus();

            if ( myLibrary[parseInt(book.id)].read )
            {
                book.textContent = "Read";
                book.style.backgroundColor = "green";
            }

            else if ( !(myLibrary[parseInt(book.id)].read) )
            {
                book.textContent = "Not Read";
                book.style.backgroundColor = "red";
            }
        });
    }
});