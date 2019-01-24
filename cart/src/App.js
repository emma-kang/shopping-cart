import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './Products';
import NotFound from './NotFound';
import './App.css';

export default class App extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/products' render={() => (
                    <Products title="Products" />
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


