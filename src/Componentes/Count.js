import { useEffect, useState } from "react";

function Count(){
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

    useEffect(()=>{
        setCalculation(()=> count * 2);
    }, [count])
    const handleClick = ()=>{
      setCount(count +1)
    }

    return(
        <>
        <p>Count: {count}</p>
        <button onClick= {handleClick}> Clickear </button>
        <p>Calculation: {calculation}</p>
        </>
    )
}

export default Count;