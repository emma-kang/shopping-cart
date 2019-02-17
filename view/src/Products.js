import React, { Component } from 'react';
import Display from './Display';
import Container from './Container';

export default class Products extends Component{
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
            return(
                <Display id={el.id} name={el.name} price={el.price} pic={el.picURL}/>
            )
        })
        return (
            <Container title={this.props.title}>
                <div className="flex-container">
                    {pd}
                </div>
            </Container>
        )
    }
}
