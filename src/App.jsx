import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import { Cadastro, Contact, Home, Servicos } from './pages'


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
          <Route path="/cadastro">
            <Cadastro />
          </Route>
       </Switch>
    </Router>
  );
}

