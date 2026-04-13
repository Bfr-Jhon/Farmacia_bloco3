import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, cadastrar, atualizar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdicao = Boolean(id);

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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function salvar(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isEdicao) {
        await atualizar("/categorias", categoria, setCategoria);
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } else {
        await cadastrar("/categorias", categoria, setCategoria);
        ToastAlerta("Categoria cadastrada com sucesso!", "sucesso");
      }
      navigate("/categorias");
    } catch {
      ToastAlerta("Erro ao salvar categoria!", "erro");
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
        <div className="p-10 flex flex-col gap-5">
          {/* Header */}
          <div className="text-center mb-2">
            <p className="text-lg font-medium" style={{ color: "#F8F8F2", letterSpacing: "-0.03em" }}>
              Farma<span style={{ color: "#50FA7B" }}>System</span>
            </p>
            <p className="text-xs mt-1" style={{ color: "#6272A4" }}>
              {isEdicao ? "Editar categoria" : "Cadastrar categoria"}
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={salvar}>
            {/* Nome */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium" style={{ color: "#50FA7B" }}>
                Nome
              </label>
              <input
                type="text"
                name="nome"
                placeholder="Ex: Antibióticos"
                className="px-4 py-2 rounded-lg text-sm w-full focus:outline-none"
                style={{ backgroundColor: "#282A36", border: "1px solid #6272A4", color: "#F8F8F2" }}
                value={categoria.nome}
                onChange={atualizarEstado}
                required
              />
            </div>

            {/* Descrição
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium" style={{ color: "#50FA7B" }}>
                Descrição
              </label>
              <textarea
                name="descricao"
                placeholder="Descreva esta categoria..."
                className="px-4 py-2 rounded-lg text-sm w-full focus:outline-none resize-none"
                style={{ backgroundColor: "#282A36", border: "1px solid #6272A4", color: "#F8F8F2" }}
                rows={4}
                value={categoria.descricao}
                onChange={atualizarEstado}
                required
              />
            </div> */}

            {/* Botões */}
            <div className="flex gap-4 pt-2">
              <button
                type="reset"
                className="w-1/2 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ backgroundColor: "#FF5555", color: "#F8F8F2" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                onClick={retornar}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-1/2 py-2 rounded-lg text-sm font-semibold flex justify-center transition-all duration-200"
                style={{ backgroundColor: "#50FA7B", color: "#282A36" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                disabled={isLoading}
              >
                {isLoading ? <ClipLoader color="#282A36" size={20} /> : isEdicao ? "Salvar" : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormCategoria;
