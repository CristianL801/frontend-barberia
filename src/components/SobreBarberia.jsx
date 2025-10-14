import { Card, Title, Text, Button, Image, Stack } from "@mantine/core";

function SobreBarberia() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      radius="md"
      withBorder
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        textAlign: "center",
        backgroundColor: "white",
      }}
    >
      <Stack align="center" gap="md">
        <Title order={3} id="sobrenosotros">
          Sobre M. S. Q Beauty Studio
        </Title>

        <Text size="sm">
          Somos un studio independiente, nuestra visión dentro de la belleza es
          estilizar y potenciar la imagen masculina en el día a día. Creemos que
          la educación en este ámbito es lo más importante. Es por ello que nos
          educamos constantemente para que tu versión también vaya evolucionando.
        </Text>

        <Text size="sm" fw={600}>
          ¡¡¡TE ESPERAMOS!!!
        </Text>

        <a
          href="https://www.google.com/maps/place/Calle+4+%23920,+Puc%C3%B3n,+Chile"
          style={{ textDecoration: "none" }}
        >
          <Button
            color="dark"
            radius="md"
            leftSection={
              <Image
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Mapa"
                width={20}
                height={20}
              />
            }
          >
            Ver en Google Maps
          </Button>
        </a>
      </Stack>
    </Card>
  );
}

export default SobreBarberia;
