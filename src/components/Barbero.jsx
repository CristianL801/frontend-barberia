import { Card, Image, Text, Title, Group } from "@mantine/core";

function Barbero() {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        backgroundColor: "white",
      }}
    >
      <Group align="center" gap="xl">
        <Image
          src="https://d1itoeljuz09pk.cloudfront.net/msqbeautystudio/collaborators/3e82c6f9-8581-46ee-afe4-249c95bf1ffe.jpg"
          alt="Manuel Samur Barber"
          radius="md"
          width={180}
          height={500}
        />

        <div>
          <Title order={2} style={{ marginBottom: "5px" }}>
            Conoce a tu Barbero
          </Title>
          <Title order={3} style={{ marginBottom: "5px" }}>
            Manuel Samur
          </Title>
          <Text size="sm" c="dimmed">
            Barbero
          </Text>
          <Text mt="sm" size="sm">
            Creador y único peluquero de nuestro prestigioso Studio.
          </Text>
        </div>
      </Group>
    </Card>
  );
}

export default Barbero;
