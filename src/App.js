import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import './App.css'

//BooksApp component
class BooksApp extends React.Component {
    state = {
        booksList : []
    }
    
    //to fetch the booksList   
    fetchBooks=()=>{
        BooksAPI.getAll().then((books)=>{
            this.setState({booksList : books})
        })
    }
    //when BooksApp is ready
    componentDidMount(){
        this.fetchBooks()
    }

    
    // to handle change of book shelves
    handleChange = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf  //update the local state
            this.setState(state => ({
                //if a new book (not on shelf) is added, concat it to this.state.booksList
                booksList: state.booksList.filter(b => b.id !== book.id).concat(book) 
              }))     
        })
    }

    render() {
        return (
          <div className="app">
            <Route path='/' exact render={()=>(
                <MainPage
                    books={this.state.booksList}
                    handleChange={this.handleChange}
                />
            )}/>
            <Route path='/search' render={()=>(
                <SearchPage
                    books={this.state.booksList}
                    handleChange={this.handleChange}
                />                              
            )}/>

          </div>
        )
    }
}

export default BooksApp
