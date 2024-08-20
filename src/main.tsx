import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// custom-deps
import App from './App.tsx'

// local

import './locale/index.tsx';

// styles
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
