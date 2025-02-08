import React, { useEffect, useState } from "react";
import PostEvento from "./PostEvento";
import GetEvento from "./GetEvento";
import NavBar from "./NavBar";

import "./App.css"

const App = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar eventos da API
  const fetchEventos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/eventos/todos");
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

   // Função para buscar um evento específico por nome
   const buscarEventoPorNome = async (nomeEvento) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/eventos/nome/${encodeURIComponent(nomeEvento)}`);

      if (!response.ok) {
        throw new Error("Evento não encontrado");
      }

      const evento = await response.json();
      setEventos([evento]); // Atualiza a lista com o evento encontrado
    } catch (error) {
      console.error("Erro:", error.message);
      setEventos([]); // Limpa a lista se não encontrar nada
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
      <NavBar onBuscar={buscarEventoPorNome} />
      <div className="container">
      <div class="events-list">
      <div class="event">
        <img src="/img/gato-preto.png" alt="Evento"/>
        <div>
          <h4>Nome do evento</h4>
          <span>15/02/2025 - 18:00 - 23:00</span>
          <p>Blumenau, Santa Catarina</p>
        </div>
        
      </div>
      <div class="event">
        <img src="/img/gato-preto.png" alt="Evento"/>
        <div>
          <h4>Nome do evento</h4>
          <span>15/02/2025 - 18:00 - 23:00</span>
          <p>Blumenau, Santa Catarina</p>
        </div>
      </div>
      <div class="event">
        <img src="/img/gato-preto.png" alt="Evento"/>
        <div>
          <h4>Nome do evento</h4>
          <span>15/02/2025 - 18:00 - 23:00</span>
          <p>Blumenau, Santa Catarina</p>
        </div>
      </div>
    </div>
      <PostEvento onEventCreated={handleEventCreated} />
      </div>
      <GetEvento eventos={eventos} />

      <footer>
        <p>&copy; 2025 Todos os direitos reservados - Eventos<b>Online</b></p>
      </footer>
    </div>
  );
};

export default App;
