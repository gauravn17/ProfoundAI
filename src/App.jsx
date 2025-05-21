// src/App.jsximport { useState } from 'react';
import logo from './assets/logo.png'; // Make sure logo.png is in /src/assets

export default function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Optional: Hook this to your backend later
    setResponse(`You said: ${input}`);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-black text-yellow-400 flex flex-col justify-center items-center font-sans">
      {/* Center Logo and Title */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <img src={logo} alt="ProfoundAI Logo" className="w-40 md:w-56 mb-4" />
        <h1 className="text-3xl font-bold tracking-wide">PROFOUNDAI</h1>
        {response && (
          <div className="mt-6 max-w-xl bg-gray-900 text-yellow-200 p-4 rounded text-left">
            {response}
          </div>
        )}
      </div>

      {/* Fixed ChatGPT-style Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-black border-t border-yellow-400">
        <div className="max-w-2xl mx-auto flex items-center gap-2">
          <input
            type="text"
            placeholder="Start reflecting..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 rounded bg-gray-900 text-yellow-400 placeholder-yellow-300 outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
