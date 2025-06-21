import React from 'react';
import RollCraftGame from './components/RollCraftGame';
import { Header } from "../src/components/Header";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#9955FF_0%,_#181A20_100%)] p-2 sm:p-4 lg:p-6">
      <Header />
      <RollCraftGame />
    </div>
  );
}

export default App;