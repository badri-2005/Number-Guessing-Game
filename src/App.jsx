import { useState } from "react";
import Result from "./Components/Result";

function App() {
  const [term, setTerm] = useState("");
  const [number] = useState(Math.floor(Math.random() * 10) + 1);

  const handleTerm = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-96 text-center ">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          🎯 Number Guessing Game
        </h1>

        <div className="mb-6">
          <h3 className="text-lg text-gray-600 mb-2">
            Enter a number between 1 and 10
          </h3>
          <input
            type="number"
            placeholder="Enter Number"
            min="1"
            max="10"
            onChange={handleTerm}
            className="w-full px-4 py-2 text-center text-lg border-2 border-blue-400 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <Result number={number} term={term} />
      </div>
    </div>
  );
}

export default App;
