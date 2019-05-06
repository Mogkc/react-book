import React, { Component } from 'react';
import BookDisplay from '../components/BookDisplay';
import API from '../utils/API';

class Saved extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.getSavedBooks().then(data =>
            this.setState({ savedBooks: data })
        );
    }

    render() {
        return (
            <div>
                {this.state.savedBooks.map(book =>
                    <BookDisplay key={book._id} data={book} />
                )}
            </div>
        );
    }
}

export default Saved;