function AddText({ answer, onQuestionClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {answer.map((question) => (
        <li key={question.id} className="flex gap-2">
          <button
            onClick={() => onQuestionClick(question.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md cursor-pointer`}
          >
            {question.text}
          </button>
        </li>
      ))}
    </ul>

  )
}


export default AddText;
