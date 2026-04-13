import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  useEffect(() => {
    if (id) {
      buscar(`/categorias/${id}`, setCategoria);
    }
  }, [id]);

  async function handleDeletar() {
    setIsLoading(true);
    try {
      await deletar(`/categorias/${id}`);
      ToastAlerta("Categoria deletada com sucesso!", "sucesso");
      navigate("/categorias");
    } catch {
      ToastAlerta("Erro ao deletar categoria!", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#282A36" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl overflow-hidden"
        style={{
          backgroundColor: "#44475A",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="p-10 flex flex-col gap-6">
          <div className="text-center">
            <p className="text-lg font-medium" style={{ color: "#F8F8F2", letterSpacing: "-0.03em" }}>
              Farma<span style={{ color: "#50FA7B" }}>System</span>
            </p>
            <p className="text-xs mt-1" style={{ color: "#6272A4" }}>
              Confirmar exclusão
            </p>
          </div>

          <div
            className="rounded-xl p-4 flex flex-col gap-1"
            style={{ backgroundColor: "#282A36", border: "1px solid rgba(255,85,85,0.3)" }}
          >
            <p className="text-xs font-medium" style={{ color: "#6272A4" }}>
              Você está prestes a deletar:
            </p>
            <p className="text-sm font-semibold" style={{ color: "#F8F8F2" }}>
              {categoria.nome}
            </p>
         
          </div>

          <p className="text-xs text-center" style={{ color: "#FF5555" }}>
            ⚠️ Esta ação não pode ser desfeita.
          </p>

          <div className="flex gap-4">
            <button
              className="w-1/2 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: "#6272A4", color: "#F8F8F2" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              className="w-1/2 py-2 rounded-lg text-sm font-semibold flex justify-center transition-all duration-200"
              style={{ backgroundColor: "#FF5555", color: "#F8F8F2" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              onClick={handleDeletar}
              disabled={isLoading}
            >
              {isLoading ? "Deletando..." : "Deletar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
