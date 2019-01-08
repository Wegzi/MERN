import React, { Component } from 'react';
import './css/bootstrap.css'
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal'

import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <AppNavbar />
          <ItemModal />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;