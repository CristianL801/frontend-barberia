import { useState } from "react";
import cortesIniciales from "./data/cortesIniciales";
import TarjetaCorte from "./components/TarjetaCorte";
import HeaderBarberia from "./components/HeaderBarberia";
import SobreBarberia from "./components/SobreBarberia";
import Barbero from "./components/Barbero";
import Comentarios from "./components/Comentarios";
import ServicioForm from "./components/ServicioForm";
import FormularioReserva from "./components/FormularioReserva";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [servicios, setServicios] = useState(cortesIniciales);
  const [modoAdmin, setModoAdmin] = useState(false);
  const [modalServicio, setModalServicio] = useState(false);
  const [servicioEditando, setServicioEditando] = useState(null); 
  const [modalReserva, setModalReserva] = useState(false);
  const [servicioReservado, setServicioReservado] = useState(null);
  const [reservas, setReservas] = useState([]); 

  
function crearServicio(nuevo) {
  let nuevoServicio = nuevo;
  nuevoServicio.id = Date.now();
  let copia = servicios.concat(nuevoServicio);
  setServicios(copia);
}

  function editarServicio(id, datosActualizados) {
    setServicios(
      servicios.map((srv) =>
        srv.id === id ? { ...srv, ...datosActualizados } : srv
      )
    );
  }

  function eliminarServicio(id) {
    setServicios(servicios.filter((srv) => srv.id !== id));
  }

  
  function abrirReserva(corte) {
    setServicioReservado(corte);
    setModalReserva(true);
  }

  
  function abrirEdicion(servicio) {
    setServicioEditando(servicio);
    setModalServicio(true);
  }

  function abrirCreacion() {
    setServicioEditando(null);
    setModalServicio(true);
  }

  
function guardarReserva(reserva) {
  const copia = reservas.slice(); 
  copia.push(reserva);            
  setReservas(copia);             
}


  return (
    <div className="App">
       <Nav />
      <HeaderBarberia />
      <hr />
      <SobreBarberia />
      <hr />
      <button onClick={() => setModoAdmin(!modoAdmin)} className="boton-admin">
        {modoAdmin ? "Salir del modo administrador" : "⋮"}
      </button>

      <h1 id="serviciosdecorte">Servicios disponibles</h1>

      {modoAdmin && (
        <button onClick={abrirCreacion} className="boton-crear">
          ➕ Crear nuevo servicio
        </button>
      )}

      <div className="tarjetas-container">
        {servicios.map((corte) => (
          <TarjetaCorte
            key={corte.id}
            corte={corte}
            onReserva={() => abrirReserva(corte)}
            onEliminar={() => eliminarServicio(corte.id)}
            onEditar={() => abrirEdicion(corte)}
            modoAdmin={modoAdmin}
          />
        ))}
      </div>

      {modalServicio && (
        <ServicioForm
          opened={modalServicio}
          onClose={() => setModalServicio(false)}
          onSubmit={
            servicioEditando
              ? (datos) => {
                  editarServicio(servicioEditando.id, datos);
                  setModalServicio(false);
                }
              : (nuevo) => {
                  crearServicio(nuevo);
                  setModalServicio(false);
                }
          }
          servicio={servicioEditando}
        />
      )}

      {modalReserva && (
        <FormularioReserva
          opened={modalReserva}
          onClose={() => setModalReserva(false)}
          servicio={servicioReservado}
          onGuardarReserva={guardarReserva}
        />
      )}

      <Barbero />
      <Comentarios />

      {modoAdmin && reservas.length > 0 && (
        <div className="panel-reservas">
          <h2>Reservas guardadas</h2>
          <ul>
            {reservas.map((r) => (
              <li key={r.id}>
                <strong>Nombre: {r.nombre}</strong> — {r.servicio} — {r.hora}
                <br />  <strong>Correo electrónico:</strong> {r.correo} |{" "}
                <strong>Teléfono:</strong> {r.telefono}
              </li>
            ))}
          </ul>
        </div>
      )}

      <footer>
        © 2025 M. S. Q Beauty Studio — Desarrollado por Cristian Liempi
      </footer>
    </div>
  );
}

export default App;
