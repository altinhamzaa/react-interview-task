import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {createBrowserRouter, RouterProvider} from "react-router"
import ServiceSelectPage from './Components/ServiceSelectPage.tsx';
  

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/jobs",
    element: <ServiceSelectPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
