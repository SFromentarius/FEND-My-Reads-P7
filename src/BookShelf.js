import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.bookShelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                        props.books
                            .filter(book=>book.shelf===props.bookShelfVar)
                            .map(book=>(
                                <li key={book.id}>
                                    <Book 
                                        book={book}
                                        handleChange={props.handleChange}
                                        bookShelf={props.bookShelfVar}
                                    />
                                </li>
                            ))
                        } 
                    </ol>
                </div>
            </div>
        )
}


export default BookShelf