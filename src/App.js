import React from 'react';
import './App.css';
import DynamicRenderer from './DynamicRenderer'

function App() {
  return (
    <div className="App">
   <DynamicRenderer data={[
{
  "is": "input",
  "type": "text",
  "name": "Some input"
},
{
  "is": "better-button",
  "text": "Click Me",
  "bg": "red"
},
{

  "is": "better-button",

  "text": "Click Me",
  "bg": "blue"
}
]} />
    </div>
  );
}

export default App;
