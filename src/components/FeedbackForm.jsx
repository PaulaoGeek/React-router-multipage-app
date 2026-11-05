
import { useState } from "react";

function FeedbackForm() {

  // Criando os estados dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  // Função para enviar o formulário
  function enviarFeedback(event) {
    event.preventDefault();

    // Validação dos campos
    if (!nome.trim() || !email.trim() || !comentario.trim()) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Exibindo os dados no alerta
    alert(
      "Feedback enviado com sucesso!\n\n" +
      "Nome: " + nome +
      "\nEmail: " + email +
      "\nComentário: " + comentario
    );

    // Limpando os campos após o envio
    setNome("");
    setEmail("");
    setComentario("");
  }

  return (
    <div className="feedback-container">

      <h2>Formulário de Feedback</h2>

      <form onSubmit={enviarFeedback}>

        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Comentário:</label>
        <textarea
          placeholder="Digite seu comentário"
          value={comentario}
          onChange={(event) => setComentario(event.target.value)}
        />

        <button type="submit">
          Enviar Feedback
        </button>

      </form>

    </div>
  );
}

export default FeedbackForm;
