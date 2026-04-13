import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Buscar (GET)
export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

// Cadastrar (POST)
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

// Atualizar (PUT)
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
};

// Deletar (DELETE)
export const deletar = async (url: string) => {
  await api.delete(url);
};
