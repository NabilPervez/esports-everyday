import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Dataset from './DatasetComponent';
import About from './AboutComponent';
import { Router, Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() { 
        return (
            <div>
                <Header />
                    <Home />
                    <Dataset />
                        <About />
                <Footer />
            </div>
        );
    }
}

export default Main;