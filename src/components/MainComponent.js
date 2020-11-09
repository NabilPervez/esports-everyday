import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Dataset from './DatasetComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

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
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route exact path='/dataset' render={() => <Dataset />} />
                            <Route exact path='/about' render={() => <About />} />
                            <Redirect to='/home' />
                        </Switch>
                  <Footer />
            </div>
        );
    }
}

export default Main;