import AuthLayout from '../layouts/AuthLayout'
import RegisterPage from '../pages/auth/RegisterPage'

export const AuthRoutes = [
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]