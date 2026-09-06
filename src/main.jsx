import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initDisableDevTools } from './utils/disableDevTools.js'

// Initialize DevTools and Inspect Element Protection Guard
initDisableDevTools();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
