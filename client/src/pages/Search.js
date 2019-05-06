import React, { Component } from 'react';
import BookDisplay from '../components/BookDisplay';
import Search from '../components/Search';
import API from '../utils/API';

class SearchPage extends Component {
    state = {
        booksFound: [],
        searchParams: ""
    }

    findBooks(event) {
        event.preventDefault();
        console.log("Finding books.")
        API.findBooks(this.state.searchParams).then(results => {
            console.log(results);
            this.setState({ booksFound: results.data.items })
        });
    }

    updateSearchParams(event) {
        this.setState({ searchParams: event.target.value });
    }

    render() {
        return (
            <div>
                <Search update={(event) => this.updateSearchParams(event)} find={(event) => this.findBooks(event)} />
                {this.state.booksFound.map(book =>
                    <BookDisplay key={book.id} 
                    authors={book.volumeInfo.authors} title={book.volumeInfo.title}
                    link={book.selfLink} description={book.description}
                    img={(book.imageLinks) ? book.imageLinks.thumbnail : `https://via.placeholder.com/200` }
                     />
                )}
            </div>
        );
    }
}

export default SearchPage;
