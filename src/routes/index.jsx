import { createBrowserRouter } from 'react-router-dom'
import { HomeRoutes } from './HomeRoutes'
import { AdminRoutes } from './AdminRoutes'
import { AuthRoutes } from './AuthRoutes'
import GenericError from '../pages/errors/GenericError'
import NotFound from '../pages/errors/NotFound'

// Composant de redirection d'erreur
function ErrorRedirect() {
  window.location.href = '/error'
  return null
}

export const router = createBrowserRouter([
  {
    errorElement: <ErrorRedirect />,
    children: [
      ...HomeRoutes,
      ...AdminRoutes,
      ...AuthRoutes,
      {
        path: '/error',
        element: <GenericError />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])