import React from 'react';
import './App.css'
import Card from './Components/card';

const App = () => {
  return (
    <div>
      <Card userName = "Chai Aur React"btnText = "Visite Here"/>
      <Card userName = "Code With React" btnText = "Click Here"/>
    </div>
  );
};



export default App;