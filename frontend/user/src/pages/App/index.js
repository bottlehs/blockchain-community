import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './style.css';
// BrowserRouter as Router
import Home from '../Home';
import Terms from '../Terms';
import Topics from '../Topics';

function App() {
  return (

<BrowserRouter>
    <div>
    <h1>Block Chain Community</h1>
      <nav>
        <ul>
          <li>
            <Link to="/terms">Terms</Link>

            </li>
            <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Terms} />
      <Route path="/topics" component={Topics} />
    </div>
</BrowserRouter>
  );
}

export default App;
