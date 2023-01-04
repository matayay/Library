function Book(title, author, page_count, read) 
{
    this.title = title;
    this.author = author;
    this.page_count = page_count;
    this.read = read;
}

function removeBook(book_index, library)
{
    let updated = library.filter( (book) => {
        return library[book_index].title != book.title;
    });

    const shelves = document.querySelector('.shelf');
    shelves.removeChild(shelves.children[book_index]);

    return updated;
}

function populateShelves(library)
{
    deleteShelves();
    const shelves = document.querySelector('.shelf');

    for ( let i = 0; i < library.length; i++ )
    {
        const new_book = document.createElement('div');
        new_book.classList.toggle('book')
        new_book.innerHTML = `<h3><em>${library[i].title}</em></h3> <h3>${library[i].author}</h3> <h3>Page Count: ${library[i].page_count}</h3>`;

        if ( library[i].read == true )
        {
            const read = document.createElement('button');
            read.textContent = "Read";
            read.style.fontSize = "1rem";
            read.style.backgroundColor = "green";
            read.style.color = "white";
            read.style.paddingRight = "3rem";
            read.style.paddingLeft = "3rem";
            read.style.paddingTop = "1rem";
            read.style.paddingBottom = "1rem";
            read.style.borderRadius = "1rem";
            read.style.border = "none";

            new_book.appendChild(read);
        }

        else if ( library[i].read == false )
        {
            const read = document.createElement('button');
            read.textContent = "Not Read";
            read.style.fontSize = "1rem";
            read.style.backgroundColor = "red";
            read.style.color = "white";
            read.style.paddingRight = "3rem";
            read.style.paddingLeft = "3rem";
            read.style.paddingTop = "1rem";
            read.style.paddingBottom = "1rem";
            read.style.borderRadius = "1rem";
            read.style.border = "none";

            new_book.appendChild(read);
        }

        const del = document.createElement('button');
        del.textContent = "Delete";
        del.classList.toggle('delete');
        new_book.append(del);

        shelves.appendChild(new_book);
    }

    updateID(library);
}

function updateID(library)
{
    for ( let i = 0; i < library.length; i++ )
    {
        const books = document.querySelectorAll('.book');
        const del = books[i].querySelector('.delete');
        del.id = i.toString();
    }
}

function deleteShelves()
{
    const shelves = document.querySelector('.shelf');

    while ( shelves.firstChild )
    {
        shelves.removeChild(shelves.lastChild);
    }
}