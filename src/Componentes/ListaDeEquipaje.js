function Item({ nombre, estaEmpacado }) {
    if (estaEmpacado) {
      return <li className="item">{nombre} ✔</li>;
    }
    return <li className="item">{nombre}</li>;
  }
  
function ListaEquipaje() {
    return (
      <section>
        <h1>Lista de equipaje de Andres</h1>
        <ul>
          <Item 
            estaEmpacado={true} 
            nombre="Traje" 
          />
          <Item 
            estaEmpacado={true} 
            nombre="Anteojos de sol" 
          />
          <Item 
            estaEmpacado={false} 
            nombre="Notebook" 
          />
        </ul>
      </section>
    );
  }
  export default ListaEquipaje;