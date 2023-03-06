import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListBusComponent from './components/ListBusComponent';
import CreateBusComponent from './components/CreateBusComponent';
import UpdateBusComponent from './components/UpdateBusComponent';
import ViewBusComponent from './components/ViewBusComponent';
import 'bootstrap/dist/css/bootstrap.min.css';  

import SignUp from './entry/SignUp';
import SignIn from './entry/SignIn';
function App() {
  return (
    <div>
        <Router>
        
        <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {SignIn}></Route>
                          <Route path = "/signup" exact component = {SignUp}></Route>
                          <Route path = "/bus" exact component = {ListBusComponent}></Route>
                          <Route path = "/busdetails" component = {ListBusComponent}></Route>
                          <Route path = "/add-bus/:id" component = {CreateBusComponent}></Route>
                          <Route path = "/view-bus/:id" component = {ViewBusComponent}></Route>
                          <Route path = "/update-bus/:id" component = {UpdateBusComponent}></Route>
                          </Switch>
          </div>
        </Router>
    </div>
    
  );
}

export default App;