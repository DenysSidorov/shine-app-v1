import React from 'react'
import ReactDOM from 'react-dom/client'
import PageLayout from './components/--layouts--/PageLayout.tsx'
import './styles/main.css'
import {Router} from './providers/RouterProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
          <PageLayout />
      </Router>
  </React.StrictMode>,
)
