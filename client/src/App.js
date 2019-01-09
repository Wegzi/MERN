import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import Login from './components/Login';
import Sobre from './components/Sobre'


import './css/bootstrap.css'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div className="App">
            <Route path={["/Home", "/Sobre"]} component={AppNavbar}/>
            <Route exact path='/' component={Login} />
            <Route path='/Home' component={ShoppingList} />
            <Route path='/Sobre' component={Sobre} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
