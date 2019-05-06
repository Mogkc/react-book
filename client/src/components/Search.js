import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <form onSubmit={this.props.find}>
                <input type="text" value={this.props.value} onChange={this.props.update} />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default Search;