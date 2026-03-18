import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/countAction";

const Counter = ()=>{
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch();
    return(
        <>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={()=>dispatch(increment())}>Increase Value</button>
            <button onClick={()=>dispatch(decrement())}>Decrease Value</button>
        </>
    )
}
export default Counter;