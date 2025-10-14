import { useState } from "react";
import { Modal, TextInput, Button, Group, Title, Select } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

function FormularioReserva({ opened, onClose, servicio, onGuardarReserva }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [hora, setHora] = useState("");

  const horas = [
    "09:45 AM",
    "10:30 AM",
    "11:15 AM",
    "12:00 PM",
    "12:45 PM",
    "13:30 PM",
    "14:15 PM",
    "15:00 PM",
    "15:45 PM",
    "16:30 PM",
    "17:15 PM",
  ];

  function guardar() {
    if (!nombre || !correo || !telefono || !hora) {
      notifications.show({
        color: "red",
        title: "Campos incompletos",
        message: "Completa todos los campos antes de confirmar.",
        icon: <IconX size={18} />,
      });
      return;
    }

    const nuevaReserva = {
      id: Date.now(),
      nombre,
      correo,
      telefono,
      hora,
      servicio: servicio?.nombre,
    };

    onGuardarReserva(nuevaReserva);

    notifications.show({
      color: "teal",
      title: "Reserva guardada",
      message: `Tu reserva fue registrada correctamente.`,
      icon: <IconCheck size={18} />,
    });

    setNombre("");
    setCorreo("");
    setTelefono("");
    setHora("");
    onClose();
  }

  return (
    <Modal opened={opened} onClose={onClose} title={`Reserva: ${servicio?.nombre}`}>
      <Title order={4}>Datos de la reserva</Title>

      <TextInput
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        mb="sm"
      />

      <TextInput
        label="Correo"
        placeholder="ejemplo@gmail.com"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        mb="sm"
      />

      <TextInput
        label="Teléfono"
        placeholder="EJ:+56 9 1234 5678"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        mb="sm"
      />

      <Select
        label="Hora"
        data={horas}
        value={hora}
        onChange={setHora}
        mb="sm"
      />

      <Group justify="flex-end" mt="md">
        <Button color="gray" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={guardar}>Guardar</Button>
      </Group>
    </Modal>
  );
}

export default FormularioReserva;

