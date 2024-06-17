import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { generateNonce } from './Utils/generateNonce';

const nonce = generateNonce();

const container = document.getElementById('app-container');

if(!container) {
    throw new Error("The required 'app-container' element was not found on the page.");
}

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App nonce={nonce} />);