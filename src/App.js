import React from 'react';
import ParticlesBg  from "particles-bg";
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
     <Header/>
     </div>
  );
}

export default App;
