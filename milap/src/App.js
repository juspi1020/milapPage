import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home.js';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <div className="Container">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
