import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

// this.props.books.filter(book=>book.shelf === 'currentlyReading')

class MainPage extends React.Component {
    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
             <BookShelf
                bookShelfTitle='Currently Reading'
                bookShelfVar='currentlyReading'
                books={this.props.books}
                handleChange={this.props.handleChange}
            />
            <BookShelf
                bookShelfTitle='Want to Read'
                bookShelfVar='wantToRead'
                books={this.props.books}
                handleChange={this.props.handleChange}
            />
            <BookShelf
                bookShelfTitle='Read'
                bookShelfVar='read'
                books={this.props.books}
                handleChange={this.props.handleChange}
            />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        
        
        )
    }

}

export default MainPage
