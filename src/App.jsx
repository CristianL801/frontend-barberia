import { useState, useEffect } from "react";
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
  const [servicios, setServicios] = useState([]); 
  const API_URL = "https://medieval-gillan-cristianl801-95f46287.koyeb.app/api"; 
  const [modoAdmin, setModoAdmin] = useState(false);
  const [modalServicio, setModalServicio] = useState(false);
  const [servicioEditando, setServicioEditando] = useState(null); 
  const [modalReserva, setModalReserva] = useState(false);
  const [servicioReservado, setServicioReservado] = useState(null);
  const [reservas, setReservas] = useState([]); 

 
  useEffect(() => {
    cargarServicios();
    cargarReservas();
  }, []);

  const cargarServicios = async () => {
    try {
      const respuesta = await fetch(`${API_URL}/services`);
      const datos = await respuesta.json();
      setServicios(datos);
    } catch (error) {
      console.error("Error conectando con el backend:", error);
    }
  };

  const cargarReservas = async () => {
    try {
      const respuesta = await fetch(`${API_URL}/reservations`);
      const datos = await respuesta.json();
      setReservas(datos);
    } catch (error) {
      console.error("Error cargando reservas:", error);
    }
  };
  
async function crearServicio(nuevo) {
    await fetch(API_URL + "/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo),
    });
    
    alert("Servicio creado");
    cargarServicios();
  }

  async function editarServicio(id, datosActualizados) {
    await fetch(API_URL + "/services/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosActualizados),
    });

    alert("Servicio actualizado");
    cargarServicios();
  }

  async function eliminarServicio(id) {
    if(!window.confirm("¿Seguro que quieres borrar este servicio?")) return;

    await fetch(`${API_URL}/services/${id}`, {
      method: "DELETE",
    });
    cargarServicios();
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

  
async function guardarReserva(datosFormulario) {
    const nuevaReserva = {
      nombre_cliente: datosFormulario.nombre,
      telefono: datosFormulario.telefono,
      fecha_cita: datosFormulario.hora,
      servicio: servicioReservado.nombre, 
      comentarios: datosFormulario.correo,
    };

    try {
      const respuesta = await fetch(API_URL + "/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaReserva),
      });

      if (respuesta.ok) {
        alert("Reserva enviada con éxito");
        cargarReservas();
      } else {
        alert("Hubo un error al guardar");
      }
    } catch (error) {
      alert("Error de conexión");
    }
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
              <li key={r.id} style={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>
                <strong>Cliente:</strong> {r.nombre_cliente} <br/>
                <strong>Fecha/Hora:</strong> {r.fecha_cita} <br/>
                <strong>Servicio:</strong> {r.servicio} <br/>
                <strong>Teléfono:</strong> {r.telefono} <br/>
                {r.comentarios && <span><strong>Nota:</strong> {r.comentarios}</span>}
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
