import React from 'react';
import NewShopForm from './NewShopForm';
import NewProductForm from './NewProductForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <NewShopForm />
      <hr />
      <NewProductForm />
    </div>
  );
}

export default App;
