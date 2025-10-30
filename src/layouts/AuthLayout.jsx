import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <section className="bg-gray-900 text-gray-100">
      <Outlet />
    </section>
  )
}
