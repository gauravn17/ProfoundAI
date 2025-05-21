// src/components/Journal.jsx// src/components/Journal.jsx
import { useState } from 'react';

export function Journal() {
  const [entry, setEntry] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!entry.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/journal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ journal: entry }),
      });

      const data = await res.json();
      setSummary(data.summary || 'Journal saved.');
    } catch (err) {
      console.error(err);
      setSummary('Error saving journal entry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Journal</h2>
      <textarea
        className="w-full h-32 p-2 text-black rounded"
        placeholder="How are you feeling today?"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-yellow-400 text-black px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save Entry'}
      </button>

      {summary && (
        <div className="bg-gray-800 p-4 rounded text-white">
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
