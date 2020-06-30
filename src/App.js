import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Create from './Pages/CreateBoard/CreateBoard';
import Board from './Pages/Board/Board';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
      
      <Route path="/login" component={Signup}/>
      <Route path="/createboard" component={Create}/>
      <Route path="/board/:boardid" component={Board}/>
      <Route exact path="*" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
