import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Alert from './pages/Alert';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/reports' exact component={Report} />
      <Route path='/alerts' exact component={Alert} />
    </Switch>

    </Router>
      
    </>
  );
}

export default App;
