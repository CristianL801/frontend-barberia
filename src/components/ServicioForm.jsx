import { useEffect, useState } from "react";
import { Modal, TextInput, Textarea, Button } from "@mantine/core";

function ServicioForm({ opened, onClose, onSubmit, servicio }) {
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    duracion: "",
    descripcion: "",
  });

  useEffect(() => {
    if (servicio) {
      setForm(servicio);
    } else {
      setForm({
        nombre: "",
        precio: "",
        duracion: "",
        descripcion: "",
      });
    }
  }, [servicio, opened]);

  function manejarCambio(evento) {
    const campo = evento.target.name;
    const valor = evento.target.value;
    setForm({ ...form, [campo]: valor });
  }

  function enviarFormulario() {
    const { nombre, precio, duracion, descripcion } = form;

    if (!nombre || !precio || !duracion || !descripcion) {
      alert("Faltan datos por compltar");
      return;
    }

    onSubmit(form);
    onClose();
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={servicio ? "Editar servicio" : "Nuevo servicio"}
      centered
    >
      <TextInput
        label="Nombre del servicio"
        name="nombre"
        value={form.nombre}
        onChange={manejarCambio}
        required
      />
      <TextInput
        label="Precio"
        name="precio"
        value={form.precio}
        onChange={manejarCambio}
        required
      />
      <TextInput
        label="Duración"
        name="duracion"
        value={form.duracion}
        onChange={manejarCambio}
        required
      />
      <Textarea
        label="Descripción"
        name="descripcion"
        value={form.descripcion}
        onChange={manejarCambio}
        minRows={2}
        required
      />
      <Button fullWidth mt="md" onClick={enviarFormulario} color="dark">
        {servicio ? "Guardar cambios" : "Agregar servicio"}
      </Button>
    </Modal>
  );
}

export default ServicioForm;
