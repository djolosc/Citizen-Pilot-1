import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard';
import Alerts from './components/alerts/Alerts';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={SignIn}>
        </Route>
        <Route exact path="/home" component={Dashboard}>
        </Route>
        <Route exact path="/alert" comonpent={Alerts}>
        </Route>
        <div>working</div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
