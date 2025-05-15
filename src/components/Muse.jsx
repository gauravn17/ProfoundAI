// src/components/Muse.jsx
export function Muse() {
    return (
      <div>
        <h2 className="text-xl mb-2">Creative Muse</h2>
        <input className="w-full p-2 mb-2 text-black rounded" placeholder="Enter a mood or thought..." />
        <button className="bg-yellow-400 text-black px-4 py-2 rounded">Generate Art or Poetry</button>
      </div>
    );
  }