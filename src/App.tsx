import React from 'react'
import './popup.css';

interface AppProps {
  nonce: string;
}

const App: React.FC<AppProps> = ({ nonce }) => {
  return (
    <div className="popup-container" nonce={nonce}>
      <h1>Chrome Extension with React.js and TypeScript</h1>
      <p>This is a sample Chrome extension built with React.js and TypeScript.</p>
    </div>
  )
}

export default App;