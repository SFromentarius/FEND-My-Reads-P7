import React from 'react'
import Book from './Book'

class BookShelf extends React.Component{
    render(){    
        return(
            
            
            
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                        this.props.books
                            .filter(book=>book.shelf===this.props.bookShelfVar)
                            .map(book=>(
                                <li key={book.id}>
                                    <Book 
                                        book={book}
                                        handleChange={this.props.handleChange}
                                        bookShelf={this.props.bookShelfVar}
                                    />
                                </li>
                            ))
        } 
                    </ol>
                  </div>
                </div>
        
        
        )
    }
}


export default BookShelf