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
        API(this.searchParams).then(results => this.setState({ booksFound: results }));
    }

    updateSearchParams(event) {
        this.setState({ searchParams: event.target.value });
    }

    render() {
        return (
            <div>
                <Search update={() => this.updateSearchParams} find={() => this.findBooks} />
                {this.state.booksFound.map(book =>
                    <BookDisplay key={book._id} data={book} />
                )}
            </div>
        );
    }
}

export default SearchPage;
