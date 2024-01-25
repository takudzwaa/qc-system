// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* Add more routes if needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
