
import { Card, CardDestaque } from "./Card";

function MainContent({ title, subtitle, children }) {
  return (
    <main className="main-content">
      <h1>{title}</h1>

      <p className="subtitle">{subtitle}</p>

      <section className="cards-container">

        <Card
          title="React"
          description="Biblioteca JavaScript para criação de interfaces."
        >
          <p>Conteúdo enviado através do children.</p>
        </Card>

        <Card
          title="JavaScript"
          description="Linguagem utilizada para desenvolver aplicações web."
        >
          <p>Podemos colocar outros elementos aqui.</p>
        </Card>

        <CardDestaque title="Aprendizado">
          <p>Aprendendo a criar componentes reutilizáveis.</p>
        </CardDestaque>

      </section>

      <div className="extra-content">
        {children}
      </div>
    </main>
  );
}

export default MainContent;
