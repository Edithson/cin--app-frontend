import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './static/css/index.css'
import App from './App.jsx'

import HomeLayout from './layouts/HomeLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import { createBrowserRouter, RouterProvider } from "react-router"

import Home from './pages/home/Home.jsx'

import Dashboard from './pages/admin/Dashboard.jsx'

import Authentification from './pages/auth/Authentification.jsx'

import NotFound from './pages/errors/NotFound.jsx'
import GenericError from './pages/errors/GenericError.jsx'
import ErrorBoundary from './pages/errors/ErrorBoundary.jsx'

// Composant qui redirige immédiatement
function ErrorRedirect() {
  window.location.href = '/error'
  return null
}

const router = createBrowserRouter([{
  errorElement: <ErrorRedirect />,
  children: [
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Authentification />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
    {
      path: '/error',
      element: <GenericError />,
    },
  ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)
