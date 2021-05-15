import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import UsersList from './components/usersList.js'
import singleUser from './components/userCard.js'


function App() {
  return (
    <Router>     
        <Switch>
          <Route exact path={["/","/users"]} component={UsersList}/>
          <Route exact path="/users/:id" component={singleUser} />
        </Switch>
    </Router>
  );
}

export default App;
