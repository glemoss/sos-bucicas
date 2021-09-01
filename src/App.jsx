import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from './pages'
import { Servicos } from './pages'

export default function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/servicos">
            <Servicos />
          </Route>
        </Switch>
    </Router>
  );
}

