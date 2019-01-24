import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        pdList: []
    }
}
componentDidMount(){
    fetch('/products')
    .then(res => res.json())
    .then(data => {
        this.setState({
            pdList: data
        })
    })
}

render(){
    let pd = this.state.pdList.map((el) => <li>{el.id}</li>)
    return(
        <div>
            {pd}
        </div>
    )
}
}


