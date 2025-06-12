import { useState } from "react";
import AddQuestion from "./components/AddQuestion";
import AddText from "./components/AddText";
import { v4 } from "uuid";

function App() {
  const [answer, setAnswer] = useState([{ id: 1, text: "Olá, meu amor!" }]);

  function onQuestionClick(questionId) {
    const newAnswer = answer.map((question) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (question.id === questionId) {
        // "..." retorna todos os valores do array
        return { ...question, text: "Oi, meu amorzinho, feliz Dia dos Namorados, o nosso primeiro de muitos que virão. Obrigado por ser essa mulher tão perfeita que você é. Obrigado por estar sempre ao meu lado. Obrigado por tudo, meu amor. Eu espero que você goste do 'presente', está mais para uma lembrancinha, mas espero que você goste. Você é a mulher da minha vida, a minha futura esposa e futura mãe dos meus filhos. Eu te amo muito, meu amor 🤍" };
      }
      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return question;
    });
    setAnswer(newAnswer);
  }

  function onAddAnswerSubmit(text) {
    const newAnswer = {
      id: v4(),
      text: text,
    };

    setAnswer([...answer, newAnswer]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Feliz dia dos namorados
        </h1>
        <AddQuestion onAddAnswerSubmit={onAddAnswerSubmit} />
        <AddText answer={answer} onQuestionClick={onQuestionClick} />
      </div>
    </div>
  );
}

export default App;
