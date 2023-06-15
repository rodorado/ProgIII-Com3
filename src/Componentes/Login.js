import React, {  useState } from "react";


//Componente para Iniciar Sesion
function Login() {
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre==="Franco" && contrasena==="123456") console.log("Iniciaste Sesion")
    else console.log("Contraseña Incorrecta")
    setContrasena("")
    setNombre("")
    
  }
    
    return (
      <div>
        <form className="formPatron" onSubmit={handleSubmit}>
          <h1>Iniciar Sesion</h1>
          <div>
            <input
              type="text"
              placeholder="Ingrese su nombre de Usuario"
              value={nombre}
              onChange={(ev) => {
                setNombre(ev.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(ev) => setContrasena(ev.target.value)}
            />
          </div>
          <button className="buttonForm" type="submit" >
            Iniciar Sesion
          </button>
        </form>
      </div>
    );
  
}

export default Login;
