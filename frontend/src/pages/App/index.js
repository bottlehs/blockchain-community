import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';
// BrowserRouter as Router
import Home from '../Home';
import Terms from '../Terms';

function App() {
  return (

<Router>
    <div>
    <h1>Block Chain Community</h1>
      <nav>
        <ul>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Terms} />
    </div>
</Router>
  );
}

export default App;
