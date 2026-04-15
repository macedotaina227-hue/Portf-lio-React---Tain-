function Projetos() {
  const projetos = [
    {
      nome: "Calculadora",
      descricao: "Calculadora simples feita com JavaScript",
    },
    {
      nome: "Site de Filmes",
      descricao: "Projeto consumindo API de filmes",
    },
    {
      nome: "Portfólio HTML",
      descricao: "Meu primeiro portfólio com HTML e CSS",
    },
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((projeto, index) => (
        <div key={index}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
        </div>
      ))}
    </section>
  );
}

export default Projetos;
