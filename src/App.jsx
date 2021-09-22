import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import { Contact, Home, Servicos, Animals } from './pages'


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
          <Route path="/servicos">
            <Servicos />
          </Route>
          <Route path="/animais">
            <Animals />
          </Route>
       </Switch>
    </Router>
  );
}

