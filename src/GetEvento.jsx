const GetEvento = ({ eventos }) => {
  return (
    <div>
      <h2>Lista de Eventos</h2>
      <ul>
        {eventos.map((evento, index) => (
          <li key={evento.identificador || index}> {/* Se identificador não for único, usa o índice */}
            <h3>{evento.nome}</h3>
            <p>{evento.descricao}</p>
            <p>{evento.localEvento}</p>
            <p>{evento.capacidade}</p>
            <p>{evento.dataInicio} - {evento.dataFim}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetEvento;