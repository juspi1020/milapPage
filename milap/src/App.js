import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import Us from './Pages/Us.js';
import Date from './Pages/Date.js';
//import Glasess from './Pages/Glasess.js';
import Lenses from './Pages/Lenses.js';

function App() {
  return (
    <div className="Container">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/nosotros" exact component={Us} />
            <Route path="/cita" exact component= {Date} />
            <Route path="/lentes" exact component= {Lenses} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;