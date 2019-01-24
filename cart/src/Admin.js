import React, { Component } from 'react';
import axios from 'axios';

export default class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            pdData: [],
            pdId: '',
            pdName: '',
            pdUrl: '',
            qty: 0,
            price: 0,
            desc: '',
            intervalIsSet: false
        }
        this.getProductData = this.getProductData.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.delProduct = this.delProduct.bind(this);
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
                pdData: data
            })
        });
    };

    // add Product data to databasse
    addProduct = () => {

    }
    // update Product data to database

    // delete Product data from database

    render() {
        return (
            <div>

            </div>
        )
    }
}
