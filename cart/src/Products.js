import React, { Component } from 'react';
import Container from './Container';

export default class Products extends Compoent{
    constructor(props){
        super(props);
        this.state = {
            pdList: [],
            intervalIsSet: false
        }
    }

    // fetch all existing data 
    componentDidMount() {
        this.getProductData();
        if(!this.state.intervalIsSet) {
            let interval = setInterval(this.getProductData, 1000);
            this.setState({
                intervalIsSet: interval
            });
        }
    }

    // always kill a process everytime we are done using it 
    componentWillUnmount() {
        if(this.state.intervalIsSet){
            clearInterval(this.state.intervalIsSet);
            this.setState({
                intervalIsSet: null
            });
        }
    }

    // get Data from database 
    getProductData = () => {
        fetch('http://localhost:8080/api/products')
        .then(res => res.json())
        .then(data => {
            this.setState({
                pdList: data
            })
        });
    };

    render() {
        let pd = this.state.pdList.map((el) => {
            return (<li>{el.id}</li>)
        })
        return (
            <div>
                {pd}
            </div>
        )
    }
}
