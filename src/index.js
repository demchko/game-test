import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Import your CSS file
import "./output.css"; // Import your Tailwind CSS file

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);