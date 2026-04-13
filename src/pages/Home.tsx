import { Link } from "react-router-dom";
import ListaCategorias from "../components/categorias/listacategorias/ListaCategorias";

function Home() {
  return (
    <>
      {/* Hero */}
      <div style={{ backgroundColor: "#282A36" }}>
        <div className="container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Esquerda */}
          <div className="flex flex-col gap-4 justify-center">
            <span
              className="text-xs w-fit px-3 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(80,250,123,0.15)",
                color: "#50FA7B",
                border: "0.5px solid rgba(80,250,123,0.3)",
              }}
            >
              Sistema de Farmácia
            </span>

            <h2
              className="text-4xl font-medium leading-tight"
              style={{ color: "#F8F8F2", letterSpacing: "-0.02em" }}
            >
              Organize.<br />
              <span style={{ color: "#50FA7B" }}>Cadastre.</span><br />
              Gerencie.
            </h2>

            <p
              className="text-sm"
              style={{ color: "#6272A4", maxWidth: "300px", lineHeight: "1.6" }}
            >
              Plataforma para gerenciar as categorias e produtos da sua farmácia
              de forma simples e rápida.
            </p>

            <div className="flex gap-3 mt-2">
              <Link
                to="/categorias/novo"
                className="inline-block px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ backgroundColor: "#50FA7B", color: "#282A36", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                + Nova Categoria
              </Link>
              <Link
                to="/categorias"
                className="inline-block px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: "transparent",
                  color: "#50FA7B",
                  border: "1px solid #50FA7B",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Ver Categorias
              </Link>
            </div>
          </div>

          {/* Direita */}
          <div className="hidden md:flex items-center justify-center">
            <span style={{ fontSize: "9rem", opacity: 0.1 }}>⚕</span>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div style={{ borderTop: "0.5px solid rgba(248,248,242,0.08)", backgroundColor: "#282A36" }} />

      {/* Lista de categorias na home */}
      <ListaCategorias />
    </>
  );
}

export default Home;
