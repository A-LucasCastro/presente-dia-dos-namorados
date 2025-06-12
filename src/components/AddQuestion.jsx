function AddQuestion({}) {

  return (
    <div className="p-6 bg-slate-200 rounded-md shadow flex flex-col gap-4">
      <h2 className="text-center text-slate-500 text-2xl font-bold">
        Você me ama ?
      </h2>
      <div className="flex justify-around gap-4">
        <button onClick={() => alert("Eu te amo muito minha princesa 🤍")}
          className="bg-slate-500 text-slate-100 p-3 rounded-md w-[200px]"
        >
          SIM
        </button>
        <button className="bg-slate-500 text-slate-100 p-3 rounded-md w-[200px]">
          NÃO
        </button>
      </div>
    </div>
  );
}

export default AddQuestion;
