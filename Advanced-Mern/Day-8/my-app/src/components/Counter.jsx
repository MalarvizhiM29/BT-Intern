import { useEffect, useState } from "react"

const Counter=()=>{

    const [count,setCount]= useState(0);


    console.log("Renderd")
    useEffect(()=>{
        console.log("Effect called")
    },[]);

    function Increment(){
        setCount(count + 1)
    }
    
    return(
        <>
            <div>
                <div>Count:{count}</div>
                <button onClick={Increment}>Increment</button>
            </div>
        </>
    )
}

export default Counter;