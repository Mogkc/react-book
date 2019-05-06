import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <form>
                <input type="text" value={this.props.value} onChange={this.props.update} />
                <button type="submit" onClick={this.props.find} >Search</button>
            </form>
        );
    }
}

export default Search;