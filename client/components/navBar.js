import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButton"><Link to="">home</Link></li>
                </ul>
                <ul id="headerButtons">
                    <li classNmae="navButton"><Link to="">resume</Link>Link></li>
                </ul>
            </header>
        )
    }
}

export default NavBar;