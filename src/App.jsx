import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fruits from './Fruits';
import FruitsCounter from './FruitsCounter';

function App() {
 const [fruits] = React.useState([
  {fruitName : "Apple" , id: 1},
  {fruitName : "Plum" , id : 2},
  {fruitName : "Plum" , id: 3}
 ]);
 return (
  <div>
    <Fruits fruits={fruits} />
    <FruitsCounter fruits = {fruits} />
  </div>
 
 );
  
}

export default App
