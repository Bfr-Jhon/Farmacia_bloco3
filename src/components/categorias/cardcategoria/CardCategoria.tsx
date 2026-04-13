import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface Props {
  categoria: Categoria;
}

function CardCategoria({ categoria }: Props) {
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-4"
      style={{
        backgroundColor: "#44475A",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold" style={{ color: "#F8F8F2" }}>
          {categoria.nome}
        </h3>
      
      </div>

      <div className="flex gap-2">
        <Link
          to={`/categorias/editar/${categoria.id}`}
          className="flex-1 text-center py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
          style={{ backgroundColor: "#BD93F9", color: "#282A36", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          ✏️ Editar
        </Link>
        <Link
          to={`/categorias/deletar/${categoria.id}`}
          className="flex-1 text-center py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
          style={{ backgroundColor: "#FF5555", color: "#F8F8F2", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          🗑️ Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
