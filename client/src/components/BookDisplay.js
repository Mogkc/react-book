import React, { Component } from 'react';

class BookDisplay extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.img} alt={"Cover of " + this.props.title} />
                <h3>Written By: {this.props.authors.map(author => author + ", ")}</h3>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default BookDisplay;