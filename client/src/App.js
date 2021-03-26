import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Alerts from './components/alerts/Alerts';
import SideNav from './navigation/SideNav';
import Reports from './components/reports/Reports.tsx';
import ActivePolls from './components/activePolls/activePolls';
import Proposals from './components/Proposals/ActiveProposals';
//const NavStack = () => {

//}

function App() {
  return (
    <BrowserRouter>
      <SideNav />
      <Switch>
        <Route exact path="/login" component={SignIn}></Route>
        <Route exact path="/home" component={Dashboard}></Route>
        <Route exact path="/reports" component={Reports}></Route>
        <Route exact path="/alert" component={Alerts}></Route>
        <Route exact path="/proposals" component={Proposals}></Route>
        <Route exact path="/activePolls" component={ActivePolls}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
