import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Create from './Pages/CreateBoard/CreateBoard';
import Board from './Pages/Board/Board';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
      <Route path="/createboard" component={Create}/>
      <Route path="/board/:boardid" component={Board}/>
      <Route exact path="*" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
