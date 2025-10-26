/**
 * @imageapp/ui
 * Vite + React web UI
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

function App(): JSX.Element {
  return (
    <div>
      <h1>Image Processing Platform</h1>
      <p>UI coming soon...</p>
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
