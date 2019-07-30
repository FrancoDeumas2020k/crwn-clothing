import React, { Component } from 'react';
import { Route,Switch,Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';
import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        user : null
      }
  }

  OAuthUnsubscribe = null;
  componentDidMount() {
    this.OAuthUnsubscribe = auth.onAuthStateChanged(user => {
      this.setState ({ user : user})
    })
  }

  componentWillUnmount() {
    this.OAuthUnsubscribe(); 
  }

   render() {
    return (
      <div>
        <Header user={this.state.user}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    )
   }   
}

export default App;
