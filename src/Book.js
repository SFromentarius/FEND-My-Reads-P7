import React, {Component}  from 'react'


class Book extends Component{    
    render(){
        let imageURL
        if(this.props.book.imageLinks){
            imageURL = this.props.book.imageLinks.thumbnail
        } else{
            imageURL =''
        }
        
        let authors
        if(this.props.book.authors){
            authors = this.props.book.authors
        } else {
            authors=''
        }

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage:`url(${imageURL})` }}></div>
                    <div className="book-shelf-changer">
                        <select 
                            value={this.props.bookShelf} 
                            onChange={(e)=>this.props.handleChange(this.props.book, e.target.value)}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{authors}</div>
            </div>            
        )
    }
}

export default Book
