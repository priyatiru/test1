import React, { Component } from "react";
import { Route,Router,Switch} from "react-router-dom";
    
   

import About from "./About";
import Contact from "./Contact";
import dashboard from "./dashboard";
import App from "./../src/components/App";
import history from './history';

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
