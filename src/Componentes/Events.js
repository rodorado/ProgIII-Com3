import { useState } from "react"

export const Events=()=>{
    const[count, setCount] = useState(0);
    const handleClick = ()=>{
        setCount(count+1)
    }
    const handleChange = (event)=>{
        console.log(event.target.value);
    }

    return (
        <>
         <h1>Eventos</h1>
         <p>Clicks: {count}</p>
         <button onClick={handleClick}>Clickeame</button>
         <button onMouseOver={handleClick}>Ratón encima</button>
         <button onMouseOut={handleClick}>Ratón fuera</button>
         <button onMouseOver={handleClick} onMouseOut={handleClick}>Ratón arriba y fuera</button>
         <button onKeyUp={handleClick}>Presiono tecla</button>
         <button onFocus={handleClick}>Foco</button>
         <br/>
         <input type="text" onChange={handleChange}/>
        </>
    )
}

