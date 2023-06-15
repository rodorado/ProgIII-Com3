import { useState } from "react"

export const LocalStorage=() =>  {
    
    const [dato, setDato] = useState()
    const handleClick = () => {
        localStorage.setItem('Variable',dato)

      }
    const handleChange = (event) => {
        console.log(event.target.value)
        setDato(event.target.value)
        //localStorage.setItem('Variable',event.target.value)
    }
  
    return (
      <>
        <h1>LocalStorage</h1>

        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Guardar datos</button>
        
      </>
    )
  }
