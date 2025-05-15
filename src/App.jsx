// src/App.jsx
import { useState } from 'react';
import { ReflectiveChat } from './components/ReflectiveChat.jsx';
import { Journal } from './components/Journal.jsx';
import { Muse } from './components/Muse.jsx';

export default function App() {
  const [view, setView] = useState('chat');

  return (
    <div className="min-h-screen bg-black text-yellow-400 font-sans">
      <header className="p-4 flex justify-between items-center border-b border-yellow-400">
        <h1 className="text-2xl font-bold">ProfoundAI</h1>
        <nav className="space-x-4">
          <button onClick={() => setView('chat')}>DeepTalk</button>
          <button onClick={() => setView('journal')}>Journal</button>
          <button onClick={() => setView('muse')}>Muse</button>
        </nav>
      </header>

      <main className="p-6">
        {view === 'chat' && <ReflectiveChat />}
        {view === 'journal' && <Journal />}
        {view === 'muse' && <Muse />}
      </main>
    </div>
  );
}