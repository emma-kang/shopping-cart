import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './Products';
import Admin from './Admin';
import NotFound from './NotFound';
import './App.css';

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
                <Route render={() => (
                    <NotFound title="Not Found" />
                )}/>
            </Switch>
        )
    }
}


