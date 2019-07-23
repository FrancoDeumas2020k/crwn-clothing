import React from 'react';
import { Route,Switch,Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = (props) => {
  return (
    <div>
      <h1>Hats Page....</h1>
      <Link to="/">Go back to Home page</Link>
    </div>
  )
  } 
  

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
