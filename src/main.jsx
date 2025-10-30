import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './static/css/index.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import HomeLayout from './layouts/HomeLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import { createBrowserRouter, RouterProvider } from "react-router"

import Home from './pages/home/Home.jsx'

import Dashboard from './pages/admin/Dashboard.jsx'
import ListSalle from './pages/admin/salle/ListSalle.jsx'
import CreateSalle from './pages/admin/salle/CreateSalle.jsx'

import Authentification from './pages/auth/Authentification.jsx'

import NotFound from './pages/errors/NotFound.jsx'
import GenericError from './pages/errors/GenericError.jsx'
import ErrorBoundary from './pages/errors/ErrorBoundary.jsx'

// Composant qui redirige immédiatement
function ErrorRedirect() {
  window.location.href = '/error'
  return null
}

// Créez une instance de QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Temps pendant lequel les données sont considérées comme "fraîches" (non périmées)
      staleTime: 1000 * 60 * 1, // 1 minute
    },
  },
});

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
        {
          path: "/admin/salles",
          element: <ListSalle />,
        },
        {
          path: "/admin/salles/create",
          element: <CreateSalle />,
        }
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
)
