
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ListProducts from './Componentes/Ejercicio-1/ProductList';
import Formulario from './Componentes/Ejercicio-2/Formulario';
import AuthContainer from './Componentes/Ejercicio-3/AuthContainer';
import StorageUpload from './Componentes/StorageUpload';


function App() {
  return (
    <>
      <h1>Rutas de ejercicios</h1>
      <div className="card">
        <Router>
          <nav>
            <Link to="/ejercicio1">Ejercicio 1</Link>
            <Link to="/ejercicio2">Ejercicio 2</Link>
            <Link to="/ejercicio3">Ejercicio 3</Link>
            <Link to="/storage">Storage</Link>

          </nav>
          <Routes>
            <Route path="/ejercicio1/" element={<ListProducts />} />
            <Route path="/ejercicio2/" element={<Formulario />} />
            <Route path="/ejercicio3/" element={<AuthContainer />} />
            <Route path="/storage" element={<StorageUpload />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
