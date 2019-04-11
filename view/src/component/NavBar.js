import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{this.props.title}</a>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}