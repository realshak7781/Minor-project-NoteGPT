import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root for rendering
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root element
root.render(<App />);
