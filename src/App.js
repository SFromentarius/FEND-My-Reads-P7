import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

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
        BooksAPI.update(book, shelf);        
        this.fetchBooks()
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
