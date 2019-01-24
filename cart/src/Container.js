import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Container extends Component {
    render(){
        return (
            <div className="container">
                <NavBar title={this.props.title} />
                {this.props.children}
            </div>
        )
    }
}