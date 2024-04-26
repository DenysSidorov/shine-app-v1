import React from 'react'
import ReactDOM from 'react-dom/client'
import RootLayout from './components/RootLayout.tsx'
import './styles/main.css'
import {Router} from './providers/RouterProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
          <RootLayout />
      </Router>
  </React.StrictMode>,
)
