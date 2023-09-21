import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {

    const [counter, setCounter] = useState(0)
    const [decrement, setDecrement]  = useState(0)
    const [disabled, setDisabled] = useState(true)

    function handleLike(){
        setCounter(counter + 1)
    }

    function handleUnlike(){
      if(counter === 0){
        setDisabled(false)
      }else{
        setDecrement(decrement - 1)
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Increment button</h1>
          <br/>
          <Button  counter={counter} onClick={handleLike}/>

          <Button isDisabled={disabled} counter={decrement} onClick={handleUnlike}/>
        </header>
      </div>
    );
}

export default App;
