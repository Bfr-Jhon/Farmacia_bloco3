import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias(): Promise<void> {
    try {
      setIsLoading(true);
      await buscar("/categorias", (data: any) => {
        setCategorias(Array.isArray(data) ? data : []);
      });
    } catch {
      ToastAlerta("Erro ao carregar categorias!", "erro");
      setCategorias([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full py-10" style={{ backgroundColor: "#282A36" }}>
      <div className="container mx-auto px-8">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold" style={{ color: "#F8F8F2" }}>
            Lista de <span style={{ color: "#50FA7B" }}>Categorias</span>
          </h2>
          <span
            className="text-xs px-2 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(80,250,123,0.15)",
              color: "#50FA7B",
              border: "0.5px solid rgba(80,250,123,0.3)",
            }}
          >
            {categorias.length} {categorias.length === 1 ? "registro" : "registros"}
          </span>
        </div>

        {isLoading && (
          <div className="flex justify-center py-16">
            <ClipLoader color="#50FA7B" size={36} />
          </div>
        )}

        {!isLoading && categorias.length === 0 && (
          <p className="text-center text-sm py-16" style={{ color: "#6272A4" }}>
            Nenhuma categoria cadastrada ainda.
          </p>
        )}

        {!isLoading && categorias.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaCategorias;
