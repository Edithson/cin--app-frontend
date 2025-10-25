import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <body className="bg-gray-900 text-gray-100">
      <Outlet />
    </body>
  )
}
