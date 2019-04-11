import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/actions';
import './App.css';

class Display extends Component {
    
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    render(){
        return(
            <div className="flex-item">
                <img src={this.props.pic} alt={this.props.name} width="150" height="150" />
                <h4>{this.props.name}</h4>
                <span>CAD {this.props.price}</span>
                <div>
                    <button className="btn btn-primary" onClick={() => this.handleClick(this.props.id)}>Add</button>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);