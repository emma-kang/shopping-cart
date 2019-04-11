import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
// has errors --> have to fix 
class ShoppingCart extends Component {
    render(){
        let addedItems = this.props.products.length ? (
            this.props.products.map(el => {
                return(
                    <li key={el.id}><img src={el.pic} alt={el.name}></img>
                        {el.name} $ {el.price}
                    </li>
                )
            })
        ):( <p>Nothing </p>)
        return(
            <div>
                <ul>
                    {addedItems}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(ShoppingCart)