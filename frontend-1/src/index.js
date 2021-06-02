import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { BrowserRouter as Router } from 'react-router-dom';

// import Navigation from './components/Navbar';
// import Routes from './Routes';



ReactDOM.render( <Router> 
    <App />
</Router>, document.getElementById("root"));

