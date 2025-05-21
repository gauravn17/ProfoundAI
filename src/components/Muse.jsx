// src/components/Muse.jsx// src/components/Muse.jsx
import { useState } from 'react';

export function Muse() {
  const [prompt, setPrompt] = useState('');
  const [poem, setPoem] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setPoem('');
    setImageURL('');

    try {
      const res = await fetch('http://localhost:5000/api/muse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setPoem(data.poem || '');
      setImageURL(data.image_url || '');
    } catch (err) {
      console.error(err);
      setPoem('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Creative Muse</h2>
      <input
        className="w-full p-2 text-black rounded"
        placeholder="Enter a mood or thought..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        className="bg-yellow-400 text-black px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Art or Poetry'}
      </button>

      {poem && (
        <div className="bg-gray-800 p-4 rounded text-white">
          <p>{poem}</p>
        </div>
      )}

      {imageURL && (
        <img src={imageURL} alt="AI generated visual" className="rounded w-full max-w-md mt-2" />
      )}
    </div>
  );
}
