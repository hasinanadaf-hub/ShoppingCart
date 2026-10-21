import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
