import React, { Component } from 'react';
import AddressProvider from './context/addressProvider';
import Table from './components/table';
import AddAddress from './components/addAddress';
import './App.css';

class App extends Component {
  render() {
    return (
      <AddressProvider>
        <Table/>
        <AddAddress/>
      </AddressProvider>
    );
  }
}

export default App;