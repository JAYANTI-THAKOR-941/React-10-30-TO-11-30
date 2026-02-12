
import { useEffect, useState } from "react"

const Welcome = ()=>{

    const [count,setCount] = useState(0);

    const increaseCount = ()=>{
        setCount(count+1)
    }
    
    const decreaseCount = ()=>{
        if(count>0){
            setCount(count-1);
        }
    }
   
    const [increase,setIncrease] = useState(0);

    const increaseValue = ()=>{
        setIncrease(increase+5)
    }

    const decreaseValue = ()=>{
        setIncrease(increase-5)
    }


   useEffect(()=>{
        const greetUser = ()=>{
            console.log('Hello user.!!')
        }
    greetUser();
   },[])

    return(
        <div>
            <h1>Welcome</h1>
            <button onClick={increaseCount}>+</button>
            <h2>{count}</h2>
            <button onClick={decreaseCount}>-</button>

        <br /><br />
            <button onClick={increaseValue}>IncreaseValue</button>
            <h2>{increase}</h2>
            <button onClick={decreaseValue}>IncreaseValue</button>
        </div>
    )
}

export default Welcome;