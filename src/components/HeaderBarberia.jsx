import { Carousel } from "@mantine/carousel";
import { Image, Button } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import "@mantine/carousel/styles.css";

function HeaderBarberia() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const imagenes = [
    "https://d1itoeljuz09pk.cloudfront.net/msqbeautystudio/gallery/IMG_2201.JPEG",
    "https://d1itoeljuz09pk.cloudfront.net/msqbeautystudio/gallery/IMG_2148.JPEG",
    "https://d1itoeljuz09pk.cloudfront.net/msqbeautystudio/gallery/IMG_2123.JPEG",
    "https://d1itoeljuz09pk.cloudfront.net/msqbeautystudio/gallery/IMG_0813.JPEG",
    "https://d1itoeljuz09pk.cloudfront.net/msqbeautystudio/gallery/IMG_1842.JPEG",
  ];

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        background: "white",
      }}
    >
      <h2 style={{ marginBottom: "5px" }}>M. S. Q Beauty Studio</h2>
      <p style={{ margin: "0 0 15px 0" }}>📍 Calle 4, Pucón, Chile</p>

      <Button
        color="dark"
        radius="md"
        component="a"
        href="#serviciosdecorte"
        style={{ marginBottom: "20px" }}
      >
        Reservar ahora
      </Button>

      <Carousel
        withIndicators
        height={420}
        slideSize="100%"
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {imagenes.map((img) => (
          <Carousel.Slide key={img}>
            <Image
              src={img}
              alt="Foto M.S.Q Beauty Studio"
              fit="contain" 
              height={400}
              width="100%"
              style={{ backgroundColor: "#f5f5f5" }} 
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default HeaderBarberia;
