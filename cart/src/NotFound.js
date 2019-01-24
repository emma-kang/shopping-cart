import React, { Component } from 'react';
import Container from './Container';

export default class NotFound extends Component {
    render(){
        return (
                <Container>
                    <h1>{this.props.title} Page Not Found</h1>
                </Container> 
        )
    };
}