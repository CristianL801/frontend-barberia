import { Button } from "@mantine/core";

function Nav() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h1 style={{ margin: 0, fontSize: "20px" }}>M. S. Q Beauty Studio</h1>

      <nav style={{ display: "flex", gap: "15px" }}>
        <a href="#serviciosdecorte" style={{ textDecoration: "none", color: "black" }}>
          Servicios
        </a>
        <a href="#sobrenosotros" style={{ textDecoration: "none", color: "black" }}>
          Sobre nosotros
        </a>
        <a href="#comentarios" style={{ textDecoration: "none", color: "black" }}>
          Comentarios
        </a>
      </nav>

      <Button color="dark" radius="md" component="a" href="#serviciosdecorte">
        Reservar hora
      </Button>
    </header>
  );
}

export default Nav;
