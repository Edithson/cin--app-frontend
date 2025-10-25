import AdminLayout from '../layouts/AdminLayout'
import DashboardPage from '../pages/admin/DashboardPage'

export const adminRoutes = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      // Ajoutez d'autres routes admin ici
      // { path: 'users', element: <UsersPage /> },
      // { path: 'settings', element: <SettingsPage /> },
    ],
  },
]