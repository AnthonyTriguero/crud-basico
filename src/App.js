import  Listar  from "./componentes/Listar";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";
import './App.css';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav">
                    <Link className="nav-item nav-link active" to={"/"}>Sistema </Link>
                    <Link className="nav-item nav-link" to={"/crear"}>Crear Empleado</Link>
                </div>
            </nav>
     <div className="container">
       <br></br>
      <Routes>
      <Route path="/" element={<Listar/>}/>
      <Route path="crear" element={<Crear/>}/>
      <Route path="editar" element={<Editar/>}/>

      </Routes>
      </div>
    </BrowserRouter>
      
  );
}


export default App;
