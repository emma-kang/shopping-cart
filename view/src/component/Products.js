import React, { Component } from 'react';
import Display from './Display';
import Container from './Container';

// Main Page 
export default class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            pdList: [],
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // fetch all existing data 
    componentDidMount() {
        this.getProductData();
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

    // handle sorting the product list 
    handleChange = (e) => {
        let sortedData = this.state.pdList;

        // sort by name 
        if(e.target.value === 'name'){
            sortedData = sortedData.sort((a, b) => {
                // ingnore case
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();

                if(nameA < nameB) return -1;
                if(nameA > nameB) return 1;

                return 0;
            })    
        }
        else if(e.target.value === 'low-price'){
            // sort by low price 
            sortedData = sortedData.sort((a, b) => {
                return a.price - b.price;
            })
        }
        else if(e.target.value === 'high-price'){
            // sort by high price 
            sortedData = sortedData.sort((a, b) => {
                return b.price - a.price;
            })
        }

        this.setState({
            pdList: sortedData,
            value: e.target.value
        })

    }

    render() {
        let pd = this.state.pdList.map((el) => {
            return(
                <Display id={el.id} name={el.name} price={el.price} pic={el.picURL}/>
            )
        })
        return (
            <Container title={this.props.title}>
                <div className="search-bar">
                    <span>Order By</span>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="select">Select</option>
                        <option value="name">Name</option>
                        <option value="low-price">Low Price</option>
                        <option value="high-price">High Price</option>
                    </select>
                </div>
                <div className="flex-container">
                    {pd}
                </div>
            </Container>
        )
    }
}
