import React, { useEffect, useState } from "react";

const GetEvento = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/buscarevento")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar eventos");
        }
        return response.json();
      })
      .then((data) => {
        setEventos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Erro ao buscar eventos");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Eventos</h1>
      <ul className="space-y-3">
        {eventos.map((evento) => (
          <li key={evento.id} className="p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{evento.nome}</h2>
            <p className="text-gray-700">{evento.descricao}</p>
            <p className="text-gray-500">{evento.data}</p>
            <p className="text-gray-500">{evento.localEvento}</p>
            <p className="text-gray-500">{evento.capacidade}</p>
            <p className="text-gray-500">{evento.tipo}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetEvento;
