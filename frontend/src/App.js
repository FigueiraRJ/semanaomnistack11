import React, { useState } from 'react';

import './global.css';

//import Header from './Header';

import Routes from './routes';


function App() {
  // const [counter, setCounter ]  = useState(0);
  // // Array[valor, funçãoDeAtualizacao]
  // function increment() {
  //   setCounter (counter + 1);
  //   console.log(counter);
  // }

  return (
    <Routes />

    // <div>
    // <Header>Contador: { counter }</Header> 
    // <button onClick={increment}>Incrementar</button>
    // </div>
  );
}

export default App;
