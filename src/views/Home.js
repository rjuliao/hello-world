import '../css/App.css'
import AppBarMenu from "../components/AppBarMenu";
import LikeBox from "../components/LikeBox";
import { useState } from 'react';

function Home() {
    const [counter, setCounter] = useState(0);
    const [decrement, setDecrement] = useState(0);
    const [disabled, setDisabled] = useState(true)

    const handleLike = () => {
        console.log('like')
        setCounter(counter + 1)
        setDisabled(false)
    }

    const handleUnlike = () => {
        if(counter === 0){
          setDisabled(true)
          setDecrement(0)
        }else{
          setCounter(counter -1)
          setDecrement(decrement + 1)
        }
    }

    const handleReset = () =>{
        console.log('reset')
        setCounter(0)
        setDecrement(0)
        setDisabled(true)
    }

    return (
      <>
        <div>
          <AppBarMenu onReset={handleReset}/>
        </div>
        <body className='Body-Item'>
          <div>
            <LikeBox 
                onLike={handleLike} 
                onDislike={handleUnlike} 
                cCounter={counter} 
                cDecrement={decrement} 
                cDisable={disabled}
            />
          </div>
        </body>
      </>
    );
}


export default Home;