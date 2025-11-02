import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// FIX: Moved global type declaration here to ensure proper JSX namespace augmentation for custom web components.
// This resolves conflicts that were causing standard HTML/SVG elements to be unrecognized by TypeScript.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id': string }, HTMLElement>;
    }
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
