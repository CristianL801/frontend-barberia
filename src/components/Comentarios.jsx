import { Container, Title, Card, Text } from "@mantine/core";

function Comentarios() {
  return (
    <Container id="comentarios" my="xl">
      <Title order={2} ta="center" mb="md">
        Mapa y reseñas de nuestros clientes en Google Maps
      </Title>

      <Text ta="center" mb="lg" c="dimmed">
        Lee las reseñas con respecto a nuestros servicios y ubicación
        directamente en Google Maps.
      </Text>

      <Card withBorder shadow="sm" p="md" radius="md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.4238098638275!2d-71.96642609999999!3d-39.278638199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96147f0019970d87%3A0x507d7d695f06fbb1!2sBarberia%20%26%20Peluquer%C3%ADa%20MSQ%20Studio%20Privado!5e0!3m2!1ses!2scl!4v1760115480048!5m2!1ses!2scl"
          width="100%"
          height="450"
          style={{ border: "0", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa y reseñas de la Barbería MSQ Studio en Google Maps"
        ></iframe>
      </Card>
    </Container>
  );
}

export default Comentarios;

