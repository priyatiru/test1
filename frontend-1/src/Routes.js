import React, { Component } from "react";
import { Route,Router, Switch} from "react-router-dom";
    
   

import About from "./components/About";
import Contact from "./components/Contact";
import dashboard from "./components/dashboard";
import App from "./../src/components/App";
import history from './components/history';

export default class Routes extends Component {
    render() {
        return (
            
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/dashboard" component={dashboard} />
                </Switch>
            </Router>
        )
    }
}