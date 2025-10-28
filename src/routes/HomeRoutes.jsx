import HomeLayout from '../layouts/HomeLayout'
import HomePage from '../pages/home/HomePage'

export const HomeRoutes = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Ajoutez d'autres routes home ici
      // { path: 'about', element: <AboutPage /> },
      // { path: 'films', element: <FilmsPage /> },
    ],
  },
]