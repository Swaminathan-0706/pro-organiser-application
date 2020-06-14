import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Create from './Pages/CreateBoard/CreateBoard';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/createboard' component={Create}/>
      </Switch>
    </Router>
  );
}

export default App;
