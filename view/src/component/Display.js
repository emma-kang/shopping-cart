import React, { Component } from 'react';

import './App.css';

export default class Display extends Component {
    render(){
        return(
            <div className="flex-item">
                <img src={this.props.pic} alt={this.props.name} width="150" height="150" />
                <h4>{this.props.name}</h4>
                <span>CAD {this.props.price}</span>
                <div>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        )
    };
}