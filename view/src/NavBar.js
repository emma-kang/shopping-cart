import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{this.props.title}</a>
                </div>
            </nav>
        )
    }
}