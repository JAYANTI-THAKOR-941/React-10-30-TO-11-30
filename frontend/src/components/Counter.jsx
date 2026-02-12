import './Header.css';
import { useState } from 'react';


const Counter = ()=>{
    const [count,setCount] = useState();

    const increaseCount = ()=>{
        setCount(count+1)
    }
    
    const decreaseCount = ()=>{
        if(count>0){
            setCount(count-1);
        }
    }
    return(
        <div className="counter">
      <button onClick={increaseCount}>+</button>
      <h2>{count}</h2>
      <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Counter;