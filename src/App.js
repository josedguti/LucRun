import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Apropos from './components/pages/Apropos';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/apropos' component={Apropos} />
        {/* <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
