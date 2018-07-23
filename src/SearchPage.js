import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'



class SearchPage extends React.Component{
    state={
        searchQuery:'',
        filteredBooksList:[]
    }
    
    updateQuery=(newQuery)=>{
        this.setState({
            searchQuery:newQuery
        })
        this.updateFilteredBooksList(newQuery);
    }

    updateFilteredBooksList=(searchQuery)=>{
        if(searchQuery) {
            BooksAPI.search(searchQuery).then((searchedBooks)=>{
                if(searchedBooks.error) {
                    this.setState({filteredBooksList:[]}) 
                } else {
                this.setState({filteredBooksList:searchedBooks})
                }
            })  
        } else {
           this.setState({filteredBooksList:[]}) 
        }
         
    }
    
    render(){    
        //const booksList = this.props.books
        
        return(
        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input value={this.state.searchQuery} type="text" placeholder="Search by title or author" onChange={(e)=>this.updateQuery(e.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {
                this.state.filteredBooksList.map(book=>{
                    return(<li key={book.id}>
                            <Book 
                                book={book}
                                handleChange={this.props.handleChange}
                            />
                         </li>)
                })    
                }
               
                </ol>
            </div>
          </div>   
        )
    }
    
}

export default SearchPage