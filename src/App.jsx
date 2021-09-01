import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Contact, Home } from './pages'


export default function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contato">
            <Contact />
          </Route>
      </Switch>
    </Router>
  );
}

