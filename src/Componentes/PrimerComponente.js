
function PrimerComponente(props) {
    console.log(props.titulo)
    return (
      <div className="App">
        <h1>{props.titulo}</h1>
        <form className="formulario">
          <p><input type="text" className="entrada" placeholder="Ingrese su Nombre" /></p>
          <p><input type="text" className="entrada" placeholder="Ingrese su Contraseña" /></p>
          <input className="boton" type="submit" id="save" value="Guardar"/><br/>
  
        </form>
      </div>
    );
  }
  
  export default PrimerComponente;