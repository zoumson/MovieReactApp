import React from 'react';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import Shop from '../Shop/Shop';
import Home from '../Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';

const Routing = (props) => {
  /* Component attributes */
  const { log, setLog } = props;
  return (
    <Router>
      <div className="App">
        <Navbar log={log} setLog={setLog} />
        <Switch>
          <Route path="/" exact render={() => <Home {...props} />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/shop" render={() => <Shop log={log} />} />
          <Route path="/login" render={() => <Login setLog={setLog} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;
