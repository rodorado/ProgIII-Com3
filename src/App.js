import { Router } from "react-router-dom";
import BasicAlert from "./Components/BasicAlert";
import BasicButton from "./Components/BasicButton";
import BasicCard from "./Components/BasicCard";
import Count from "./Components/Count";
import CountCalculation from "./Components/CountCalculation";
import { Events } from "./Components/Events";
import ListaEquipaje from "./Components/ListaEquipaje";
import Login from "./Components/Login";
import PrimerComponente from "./Components/PrimerComponente";
import RouterApp from "./Router/RouterApp";
import Axios from "./Components/Axios";
import AxiosPost from "./Components/AxiosPost";
import AxiosPut from "./Components/AxiosPut";
import AxiosDelete from "./Components/AxiosDelete";
import { LocalStorage } from "./Components/LocalStorage";


function App() {
  let titulo1="Mi Primer Componente"


  return (
    <div className="App">
      {/* <RouterApp/> */}
      {/* <PrimerComponente titulo={titulo1}/>
      <PrimerComponente titulo={"Mi segundo Componente"}/> */}
      {/* <h1>Componentes con React-Bootstrap</h1>
      <BasicButton/>
      <BasicAlert/>
      <BasicCard/> */}
      {/* <ListaEquipaje/> */}
      {/* <Count/>
      <CountCalculation/> */}
      {/* <Events/> */}
      {/* <Login/> */}
      {/* <Axios/> */}
      {/* <AxiosDelete/> */}
      <LocalStorage/>
    </div>
  );
}

export default App;



{/* <p>
    Elija la modalidad :  
    <input type="radio"  name="tipo" defaultValue="Opcion 1" /> Opcion 1    
    <input type="radio"  name="tipo" defaultValue="Opcion 2" /> Opcion 2
</p> */}
            
