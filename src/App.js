import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Card caption="Card 1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
          nemo vitae quibusdam amet dolore libero inventore alias eaque et!
        </Card>
        <Card caption="Card 2">
          Perferendis sit eligendi hic odit odio, aspernatur maxime quaerat
          architecto laudantium ad aliquam necessitatibus dolore vero earum
          blanditiis tenetur cumque sint!
        </Card>
      </div>
    </div>
  );
}

export default App;
