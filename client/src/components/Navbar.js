import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to="/">Search</Link>
                <Link to="/saved">Saved</Link>
            </div>
        );
    }
}

export default NavBar;