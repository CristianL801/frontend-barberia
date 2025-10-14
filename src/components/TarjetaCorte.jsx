import { Card, Text, Title, Button, Group } from "@mantine/core";

function TarjetaCorte({ corte, onReserva, onEditar, onEliminar, modoAdmin }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        textAlign: "center",
        margin: "10px",
        backgroundColor: "white",
      }}
    >
      <Title order={3} style={{ marginBottom: "5px" }}>
        {corte.nombre}
      </Title>

      {corte.duracion && (
        <Text size="sm" c="dimmed" mb="xs">
          {corte.duracion}
        </Text>
      )}

      <Text size="sm" mb="sm">
        {corte.descripcion}
      </Text>

      <Text fw={700} size="lg" mb="md">
        {corte.precio}
      </Text>

      
      {!modoAdmin && (
        <Button color="blue" radius="md" onClick={onReserva}>
          Reservar
        </Button>
      )}

      
      {modoAdmin && (
        <Group justify="center" mt="md">
          <Button color="blue" variant="light" onClick={() => onEditar(corte)}>
            Editar
          </Button>
          <Button color="red" variant="light" onClick={onEliminar}>
            Eliminar
          </Button>
        </Group>
      )}
    </Card>
  );
}

export default TarjetaCorte;
