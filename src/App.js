import React from 'react';
import RollCraftGame from './components/RollCraftGame';
import { Header } from "../src/components/Header";
import patternSvg from '../src/assets/pattern.svg';

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#9955FF_0%,_#181A20_100%)]" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${patternSvg})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '500px 500px',
          opacity: 0.6
        }}
      />

      <div className="relative z-10 p-2 sm:p-4 lg:p-6">
        <Header />
        <RollCraftGame />
      </div>
    </div>
  );
}

export default App;