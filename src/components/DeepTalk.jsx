// src/components/ReflectiveChat.jsx// src/components/DeepTalk.jsx
import { useState } from 'react';

export function DeepTalk() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/deep-talk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setResponse(data.reply || 'No response from server.');
    } catch (err) {
      console.error(err);
      setResponse('Error connecting to backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">DeepTalk</h2>
      <textarea
        className="w-full h-32 p-2 text-black rounded"
        placeholder="What's on your mind?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-yellow-400 text-black px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Send'}
      </button>

      {response && (
        <div className="bg-gray-800 p-4 rounded text-white">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
