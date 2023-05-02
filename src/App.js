import PrimerComponente from "./Componentes/PrimerComponente";

function App() {

  let titulo1="Primer Componente"
  return (
    <>
      <PrimerComponente titulo={titulo1}/>
      <PrimerComponente titulo ={"Mi segundo componente"} />
    </>
  );
}

export default App;