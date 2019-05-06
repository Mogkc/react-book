import React, { Component } from 'react';
import BookDisplay from '../components/BookDisplay';
import Search from '../components/Search';
// import API from '../../public/API';

class Saved extends Component {
    state = {
        booksFound: []
    }

    render() {
        return (
            <div>
                <Search />
                {this.state.booksFound.map(book =>
                    <BookDisplay key={book._id} data={book} />
                )}
            </div>
        );
    }
}

export default Saved;