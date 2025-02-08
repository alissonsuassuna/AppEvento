import React, { useEffect, useState } from "react";
import PostEvento from "./PostEvento";
import GetEvento from "./GetEvento";

const App = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar eventos da API
  const fetchEventos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/buscarevento");
      if (!response.ok) {
        throw new Error("Erro ao buscar eventos");
      }
      const data = await response.json();
      setEventos(data);
    } catch (error) {
      setError("Erro ao buscar eventos");
    } finally {
      setLoading(false);
    }
  };

  // Chama a função de buscar eventos quando o componente é montado
  useEffect(() => {
    fetchEventos();
  }, []);

  // Função para atualizar a lista de eventos quando um evento é cadastrado
  const handleEventCreated = () => {
    fetchEventos(); // Recarrega a lista de eventos após o cadastro
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <PostEvento onEventCreated={handleEventCreated} />
      <GetEvento eventos={eventos} />
    </div>
  );
};

export default App;
