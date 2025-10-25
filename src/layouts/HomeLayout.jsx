import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../pages/home/layout/NavBar'
import Footer from '../pages/home/layout/Footer'

export default function HomeLayout() {
  return (
    <body className="bg-gray-900 text-gray-100">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  )
}
