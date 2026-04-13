import { toast } from "react-toastify";

export function ToastAlerta(mensagem: string, tipo: "sucesso" | "erro" | "info") {
  switch (tipo) {
    case "sucesso":
      toast.success(mensagem, { position: "top-right" });
      break;
    case "erro":
      toast.error(mensagem, { position: "top-right" });
      break;
    case "info":
      toast.info(mensagem, { position: "top-right" });
      break;
  }
}
