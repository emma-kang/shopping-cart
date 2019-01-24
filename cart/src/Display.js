import React, { Component } from 'react';
import pic from './img.png';
import './App.css';

export default class Display extends Component {
    render(){
        return(
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.name}</td>
                <td><img src={pic} alt={this.props.name} width="200" height="200"></img></td>
                <td>CAD {this.props.price}</td>
            </tr>
        )
    };
}