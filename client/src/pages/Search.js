import React, { Component } from 'react';
import BookDisplay from '../components/BookDisplay';
import Search from '../components/Search';
import API from '../utils/API';

class Search extends Component {
    state = {
        booksFound: [],
        searchParams: ""
    }

    findBooks() {
        API(searchParams).then(results => this.setState({ booksFound: results }));
    }

    updateSearchParams(event) {
        this.setState({ searchParams: event.target.value });
    }

    render() {
        return (
            <div>
                <Search update={this.updateSearchParams} find={this.findBooks} />
                {this.state.booksFound.map(book =>
                    <BookDisplay key={book._id} data={book} />
                )}
            </div>
        );
    }
}

export default Search;