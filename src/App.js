import React from 'react'
import Home from "./componetes/Home";
import Enrollment from "./componetes/Enrollment";



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () =>{
  return(
    <Router>
    
     

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/enrollment">
          <Enrollment />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
);
}
export default App