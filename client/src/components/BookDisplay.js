import React, { Component } from 'react';

class BookDisplay extends Component {
    render() {
        return (
            <div>
                <h1><a href={this.props.link}>{this.props.title}</a></h1>
                <img src={this.props.img} alt={"Cover of " + this.props.title} />
                <h3>Written By: {this.props.authors.map(author => <span>{author}, </span>)}</h3>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default BookDisplay;