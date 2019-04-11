import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './Products';
import Admin from './Admin';
import NotFound from './NotFound';
import './App.css';
import ShoppingCart from './ShoppingCart';

export default class App extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' render={() => (
                    <Products title="Shopping Cart" />
                )}/>
                <Route exact path='/admin' render={() => (
                    <Admin />
                )}/> 
                <Route exact path='/cart' render={() => (
                    <ShoppingCart />
                )}/>
                <Route render={() => (
                    <NotFound title="Not Found" />
                )}/>
            </Switch>
        )
    }
}


